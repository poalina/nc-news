import React, { Component } from "react";
import * as api from "../utils/api";
import TogglerShowHide from "./TogglerShowHide";
import Votes from "./Votes";

export default class SingleArticle extends Component {
  state = { article: {}, comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;

    const comments = api.getCommentsByArticleId(article_id);
    const article = api.getArticleById(article_id);

    Promise.all([comments, article]).then(([{ comments }, { article }]) => {
      this.setState({ article, comments, isLoading: false });
    });
  }

  render() {
    const { article } = this.state;
    const { comments } = this.state;
    console.log(article.votes, "votes");
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
          <Votes votes={article.votes} article_id={article.article_id} />
        )}

        <p>Comments: {article.comment_count}</p>

        <TogglerShowHide>
          <>
            {comments.map(comment => {
              return (
                <>
                  <p key={comment.comment_id}>
                    <i> {comment.author}:</i> "{comment.body}" <br />
                    Created at: <i>{comment.created_at}</i>
                  </p>
                  <p> Votes: {comment.votes} </p>
                  <button> Vote up</button>
                  <button> Vote down</button>
                  <hr />
                </>
              );
            })}
          </>
        </TogglerShowHide>
      </div>
    );
  }
}
