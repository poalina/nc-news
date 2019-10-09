import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class TopicsList extends Component {
  state = { topics: [] };

  componentDidMount() {
    api.getAllTopics().then(({ data }) => {
      const { topics } = data;
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;

    return (
      <div className="topics">
        {topics.map(topic => {
          return (
            <p>
              <b>
                <Link to={`/topics/${topic.slug}`}>
                  #{topic.slug} - {topic.description}
                </Link>
              </b>
            </p>
          );
        })}
      </div>
    );
  }
}
