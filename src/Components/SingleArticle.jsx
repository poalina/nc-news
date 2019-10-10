import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticle extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const { article_id } = this.props;

    const comments = api.getCommentsByArticleId(article_id);
    const article = api.getArticleById(article_id);

    Promise.all([comments, article]).then(([{ comments }, { article }]) => {
      this.setState({ article, comments });
    });
  }

  render() {
    const { article } = this.state;
    const { comments } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>
          Author: <i>{article.author}</i>, created at:{" "}
          <i>{article.created_at}</i>
        </p>

        <h2>Comments:</h2>
        <>
          {comments.map(comment => {
            return (
              <p key={comment.comment_id}>
                <i>{comment.author}</i>: "{comment.body}"
              </p>
            );
          })}
        </>
      </div>
    );
  }
}
