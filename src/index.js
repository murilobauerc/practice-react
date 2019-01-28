import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard approve="Approve" reject="Reject">
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          text="Delicious food!"
          src={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard approve="Approve" reject="Reject">
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          text="Awesomeeeee!"
          src={faker.image.avatar}
        />
      </ApprovalCard>
      <ApprovalCard approve="Approve" reject="Reject">
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          text="Cool kids!"
          src={faker.image.avatar}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
