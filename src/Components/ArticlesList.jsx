import React, { Component } from "react";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";
import Sort from "./Sort";

export default class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sort_by: "created_at" };

  componentDidMount() {
    const { topic, username } = this.props;
    api.getAllArticles(topic, username).then(({ data }) => {
      const { articles } = data;

      this.setState({ articles, isLoading: false });
    });
  }

  fetchArticles = sort_by => {
    const { topic, username } = this.props;
    api.getAllArticles(topic, username, sort_by).then(({ data }) => {
      const { articles } = data;
      this.setState({ articles });
    });
  };

  render() {
    const { articles } = this.state;
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sort articles={articles} fetchArticles={this.fetchArticles} />

        <ul className="list">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }
}
