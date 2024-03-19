import React, { Component } from "react";
import "./style.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/webpack-resolver";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
    };
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    window.updateText = this.updateText;
  }

  componentWillUnmount() {
    delete window.updateText;
  }

  updateText = (newText) => {
    this.setState({ code: newText });
    if (this.editorRef.current) {
      this.editorRef.current.editor.setValue(newText);
    }
  };

  changed = (text) => {
    window.state.code = text;
    this.setState({ code: text });
  };

  render() {
    return (
      <AceEditor
        ref={this.editorRef}
        mode="lua"
        theme="github_dark"
        onChange={this.changed}
        value={this.state.code}
        name="editor"
        placeholder='print("Hello World!")'
        fontSize={14}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        className="editor"
        width="100%"
        height="100vh"
      />
    );
  }
}

export default Editor;
