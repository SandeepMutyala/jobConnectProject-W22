import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function DeleteComments(props) {
  const [commentId, setCommentId] = useState(props.id);
  function deleteComment() {
    setCommentId(props.id);
    console.log(commentId);
    axios.delete("http://localhost:4000/api/v1/admin/deleteComments", {
      data: {
        id: commentId,
      },
    });
    window.location.reload(false);
  }
  return (
    <button
      type="button"
      className="btn btn-primary btn-small"
      onClick={() => {
        deleteComment();
        props.ref();
      }}
    >
      Delete
    </button>
  );
}

export default DeleteComments;
