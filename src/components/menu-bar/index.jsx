import React, { Component } from "react";
import "./menu-bar.css";

class MenuBar extends Component {
  render() {
    return (
      <div className={"menubar"}>
        <img
          src={"./LunarLogo.png"}
          height={25}
          alt={"The logo for bismuthium lunar"}
        />
        &nbsp;&nbsp;&nbsp;
        <div className={"menubaritem"} onClick={this.props.onClickSave}>
          <p>Save</p>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className={"menubaritem"} onClick={this.props.onClickLoad}>
          <p>Load</p>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className={"menubaritem"} onClick={this.props.onClickRun}>
          <p>Run (beta)</p>
        </div>
      </div>
    );
  }
}

export default MenuBar;
