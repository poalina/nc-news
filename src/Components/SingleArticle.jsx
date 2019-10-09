import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticle extends Component {
  state = { article: {}, comments: [] };

  componentDidMount() {
    const { article_id } = this.props;

    const comments = api.getCommentsByArticleId(article_id);
    const article = api.getArticleById(article_id);
    console.log(article);
    console.log(comments);

    Promise.all([comments, article]).then(([{ comments }, { article }]) => {
      this.setState({ article, comments });
    });
  }

  render() {
    console.log(this.state);
    const { article } = this.state;
    const { comments } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>{article.author}</p>

        <h2>Comments:</h2>
        <ul>
          {comments.map(comment => {
            return <li key={comment.comment_id}>{comment.body}</li>;
          })}
        </ul>
      </div>
    );
  }
}
