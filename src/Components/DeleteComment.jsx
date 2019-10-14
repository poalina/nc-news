import React from "react";
import * as api from "../utils/api";

export default function DeleteComment({ comment_id, removeComment }) {
  const handleDeletion = event => {
    console.log(event.target.value, "target");

    removeComment(comment_id);
    api.deleteCommentById(comment_id);
  };

  return (
    <div>
      <button type="submit" value={comment_id} onClick={handleDeletion}>
        delete
      </button>
    </div>
  );
}
