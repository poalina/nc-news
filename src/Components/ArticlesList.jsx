import React, { Component } from "react";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";
import Sort from "./Sort";

export default class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    const { topic, username, votes, sort_by } = this.props;
    api.getAllArticles(topic, username, votes, sort_by).then(({ data }) => {
      const { articles } = data;
      console.log(votes, "votes z artcilesList 13");
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles } = this.state;
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sort articles={articles} />

        <ul className="list">
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }
}
