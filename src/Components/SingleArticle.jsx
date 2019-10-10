import React, { Component } from "react";
import * as api from "../utils/api";
import TogglerShowHide from "./TogglerShowHide";
import Votes from "./Votes";
import VotesComments from "./VotesComments";

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
                <div key={comment.comment_id}>
                  <p>
                    <i> {comment.author}:</i> "{comment.body}" <br />
                    Created at: <i>{comment.created_at}</i>
                  </p>

                  <VotesComments
                    votes={comment.votes}
                    comment_id={comment.comment_id}
                  />
                </div>
              );
            })}
          </>
        </TogglerShowHide>
      </div>
    );
  }
}
