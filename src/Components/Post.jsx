import React, { Component } from "react";
import * as api from "../utils/api";

export default class Post extends Component {
  state = { username: "grumpy19", body: "" };

  changeHandler = event => {
    this.setState({ body: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    const { article_id, addComment } = this.props;

    api.postCommentByArticleId(article_id, this.state).then(comment => {
      addComment(comment);
      this.setState({ body: "" });
    });
  };

  render() {
    const { body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="write here..."
            value={body}
            onChange={this.changeHandler}
          ></input>
          <button type="submit"> Add comment </button>
        </form>
      </div>
    );
  }
}
