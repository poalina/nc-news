import React, { Component } from "react";
import * as api from "../utils/api";

export default class SingleArticle extends Component {
  state = { article: [] };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(({ data }) => {
      const { article } = data;
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </div>
    );
  }
}
