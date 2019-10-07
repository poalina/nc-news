import React, { Component } from "react";
import * as api from "../utils/api";

export default class ArticlesList extends Component {
  state = { articles: [] };

  componentDidMount() {
    api.getAllArticles().then(({ data }) => {
      const { articles } = data;
      this.setState({ articles });
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return <li key={article.article_id}>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
