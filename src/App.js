import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import TopicsList from "./Components/TopicsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <NavBar />
        <br />
        <Router>
          <Homepage path="/" />
          <ArticlesList path="/articles" />
          <ArticlesList path="/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <TopicsList path="/topics" />
        </Router>
      </div>
    );
  }
}

export default App;
