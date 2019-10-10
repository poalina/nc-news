import React from "react";
import { Link } from "@reach/router";

export default function ArticleCard(props) {
  return (
    <li>
      <b>
        <Link to={`/articles/${props.article.article_id}`}>
          {" "}
          {props.article.title}
        </Link>
      </b>
      <br /> <i>{props.article.author}</i>
      <br />
      <br />
    </li>
  );
}
