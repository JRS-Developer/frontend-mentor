import CommentItem from "./CommentItem";
import { CommentsData } from "../types/types";

interface Props extends CommentsData {
  isReplyList?: boolean;
}

const CommentList = ({ comments, currentUser, isReplyList }: Props) => {
  const defaultClass = "flex flex-col gap-4";

  const className = isReplyList
    ? `${defaultClass} pl-4 border-l-2 ml-2 sm:ml-8 sm:pl-8`
    : `${defaultClass} w-full`;

  if (!comments?.length) {
    return (
      <div className={className}>
        <p className="text-gray-500">No comments yet.</p>
      </div>
    );
  }

  return (
    <ul className={className}>
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
