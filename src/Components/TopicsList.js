import React, { Component } from "react";
import * as api from "../utils/api";

export default class TopicsList extends Component {
  state = { topics: [] };

  componentDidMount() {
    api.getAllTopics().then(x => console.log(x, "x========="));
  }

  render() {
    return <div>hey</div>;
  }
}
