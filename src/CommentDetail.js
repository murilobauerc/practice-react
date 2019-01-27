import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.src} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
          <button onClick={event => props.handleDelete(event, props.id)}>
            {" "}
            Excluir{" "}
          </button>
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>

        <div className="text">{props.age}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
