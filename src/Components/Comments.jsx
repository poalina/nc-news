import React, { Component } from "react";
import * as api from "../utils/api";
import TogglerShowHide from "./TogglerShowHide";
import Votes from "./Votes";
import Post from "./Post";
import DeleteComment from "./DeleteComment";

export default class Comments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getCommentsByArticleId(article_id).then(data => {
      const { comments } = data;
      this.setState({ comments });
    });
  }
  addComment = comment => {
    this.setState(({ comments }) => {
      return { comments: [comment, ...comments] };
    });
  };
  removeComment = comment_id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(comment => {
          return comment.comment_id !== comment_id;
        })
      };
    });
  };

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <div>
        <TogglerShowHide>
          <>
            <Post article_id={article_id} addComment={this.addComment} />

            {comments.map(comment => {
              return (
                <div key={comment.comment_id}>
                  <p>
                    <i> {comment.author}: </i> "{comment.body}" <br />
                    Created at: <i>{comment.created_at}</i>
                  </p>
                  <DeleteComment
                    comment_id={comment.comment_id}
                    removeComment={this.removeComment}
                  />
                  <Votes
                    votes={comment.votes}
                    id={comment.comment_id}
                    type="comments"
                  />
                </div>
              );
            })}
          </>
        </TogglerShowHide>
      </div>
    );
  }
}
