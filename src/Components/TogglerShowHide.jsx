import React, { Component } from "react";

export default class TogglerShowHide extends Component {
  state = {
    isVisible: false
  };
  toggleHandler = () => {
    this.setState(currentState => {
      return { isVisible: !currentState.isVisible };
    });
  };
  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <button onClick={this.toggleHandler}>
          {" "}
          {isVisible ? "Hide comments" : "Show comments"}
        </button>
        {isVisible && this.props.children}
      </div>
    );
  }
}
