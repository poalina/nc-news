import React, { Component } from "react";
import * as api from "../utils/api";

export default class Votes extends Component {
  state = {
    voteCount: 0
  };

  updateVotes = num => {
    const { votes, article_id } = this.props;
    this.setState({ voteCount: this.state.voteCount + num });
    api.patchArticleVote(article_id, num);
  };

  render() {
    // console.log(this.props, " props from votes.jsx");
    const { votes, article_id } = this.props;
    console.log(votes, " votes.jsx");
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
