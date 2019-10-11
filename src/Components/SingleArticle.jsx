import React, { Component } from "react";
import * as api from "../utils/api";

import Votes from "./Votes";
import Comments from "./Comments";

export default class SingleArticle extends Component {
  state = { article: {}, isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;

    api.getArticleById(article_id).then(data => {
      const { article } = data;
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article } = this.state;
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>
          Author: <i>{article.author}</i>, created at:{" "}
          <i>{article.created_at}</i>
        </p>
        {article && (
          <Votes
            votes={article.votes}
            id={article.article_id}
            type="articles"
          />
        )}

        <p>Comments: {article.comment_count}</p>
        <Comments article_id={article.article_id} />
      </div>
    );
  }
}
