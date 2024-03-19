import MenuBar from "./components/menu-bar";
import Editor from "./components/editor";
import { saveAs } from "file-saver";
import { LuaJS } from "@doridian/luajs";

const handleSave = () => {
  let blob = new Blob([window.state.code], { type: "text/lua" });
  saveAs(blob, "script.lua");
};

function filepicker(callback) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".lua";
  input.style.display = "none";
  document.body.appendChild(input);
  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        callback(contents);
      };
      reader.readAsText(file);
    }
    document.body.removeChild(input);
  });
  input.click();
}

const handleLoad = () => {
  filepicker((content) => {
    window.updateText(content);
  });
};

const handleRun = async () => {
  try {
    let value;
    LuaJS.newState().then(async (L) => {
      value = await L.run(window.state.code);
    });
  } catch (error) {
    alert(error);
  }
}

function App() {
  return (
    <>
      <MenuBar onClickSave={handleSave} onClickLoad={handleLoad} onClickRun={handleRun} />
      <div style={{ width: "100%", height: "100%" }}>
        <Editor />
      </div>
    </>
  );
}

export default App;
