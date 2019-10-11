import React, { Component } from "react";
import * as api from "../utils/api";
import TogglerShowHide from "./TogglerShowHide";
import Votes from "./Votes";
import Post from "./Post";

export default class Comments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(data => {
      const { comments } = data;
      this.setState({ comments });
    });
  }

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <div>
        <TogglerShowHide>
          <>
            {comments.map(comment => {
              return (
                <div key={comment.comment_id}>
                  <p>
                    <i> {comment.author}: </i> "{comment.body}" <br />
                    Created at: <i>{comment.created_at}</i>
                  </p>

                  <Votes
                    votes={comment.votes}
                    id={comment.comment_id}
                    type="comments"
                  />
                  <Post article_id={article_id} />
                </div>
              );
            })}
          </>
        </TogglerShowHide>
      </div>
    );
  }
}
