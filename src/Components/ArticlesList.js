import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    // this props.topic
    console.log(this.props);
    const { topic } = this.props;
    api.getAllArticles(topic).then(({ data }) => {
      const { articles } = data;
      this.setState({ articles });
    });
  }

  render() {
    console.log(this.state, "jjjjjjjjj====");
    const { articles } = this.state;
    // if (isLoading) return <p>Loading.......</p>;
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
      </div>
    );
  }
}
