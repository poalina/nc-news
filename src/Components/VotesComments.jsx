import React, { Component } from "react";
import * as api from "../utils/api";

export default class VotesComments extends Component {
  state = {
    voteCount: 0
  };

  updateCommentsVote = num => {
    const { votes, comment_id } = this.props;
    this.setState({ voteCount: this.state.voteCount + num });
    api.patchCommentVote(comment_id, num);
  };

  render() {
    console.log(this.props, "props form votes");
    const { votes, comment_id } = this.props;
    return (
      <div>
        <p> Votes: {votes + this.state.voteCount} </p>
        <button onClick={() => this.updateCommentsVote(1)}> Vote up</button>
        <button onClick={() => this.updateCommentsVote(-1)}> Vote down</button>
        <hr />
      </div>
    );
  }
}
