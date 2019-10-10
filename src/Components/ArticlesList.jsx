import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";

export default class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    const { topic, username, votes } = this.props;
    api.getAllArticles(topic, username, votes).then(({ data }) => {
      const { articles } = data;
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles } = this.state;
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul className="list">
          {articles.map(article => {
            return (
              <li key={article.article_id}>
                <b>
                  <Link to={`/articles/${article.article_id}`}>
                    {" "}
                    {article.title}
                  </Link>
                </b>
                <br /> <i>{article.author}</i>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        <ArticleCard />
      </div>
    );
  }
}
