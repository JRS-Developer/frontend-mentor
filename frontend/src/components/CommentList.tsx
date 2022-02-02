import CommentItem from "./CommentItem";
import { CommentsData } from "../types/types";

interface Props extends CommentsData {
  isReplyList?: boolean;
}

const CommentList = ({ comments, currentUser, isReplyList }: Props) => {
  return (
    <ul className={`${isReplyList ? "pl-4 border-l" : ""}`}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUser={currentUser}
        />
      ))}
    </ul>
  );
};

export default CommentList;
