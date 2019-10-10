import React, { Component } from "react";

export default class Sort extends Component {
  handleChange = event => {
    console.log(event, "event z sort 8");
    console.log(this.props, "props z sort 6");
    const sort_by = event.target.value;
    console.log(sort_by, "sort_by z sort 8");
    this.props.getAllArticles(sort_by);
  };
  render() {
    return (
      <form>
        <select onChange={this.handleChange}>
          <option value="created_at">Recent added</option>
          <option value="votes">Most popular</option>
          <option value="comments_count">Most commented</option>
        </select>
      </form>
    );
  }
}
