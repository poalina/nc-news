import React, { Component } from "react";
import * as api from "../utils/api";

export default class Votes extends Component {
  state = {
    voteCount: 0
  };

  updateVotes = num => {
    const { id, type } = this.props;

    this.setState({ voteCount: this.state.voteCount + num });

    api.patchVote(id, num, type);
  };

  render() {
    const { votes } = this.props;

    return (
      <>
        <p>Votes: {votes + this.state.voteCount}</p>
        <button name="voteUp" onClick={() => this.updateVotes(1)}>
          Vote up
        </button>
        <button name="voteDown" onClick={() => this.updateVotes(-1)}>
          Vote down
        </button>
      </>
    );
  }
}
