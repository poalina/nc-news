import React, { Component } from "react";
import * as api from "../utils/api";

export default class Votes extends Component {
  state = {
    voteCount: 0
  };

  updateArticlesVotes = num => {
    const { votes, article_id } = this.props;
    this.setState({ voteCount: this.state.voteCount + num });
    api.patchArticleVote(article_id, num);
  };

  render() {
    const { votes, article_id } = this.props;

    return (
      <>
        <p>Votes: {votes + this.state.voteCount}</p>{" "}
        <button name="voteUp" onClick={() => this.updateVotes(1)}>
          {" "}
          Vote up
        </button>
        <button name="voteDown" onClick={() => this.updateVotes(-1)}>
          {" "}
          Vote down{" "}
        </button>
      </>
    );
  }
}
