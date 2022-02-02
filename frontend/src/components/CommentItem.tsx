import { CurrentUser, Comment } from "../types/types";
import PlusIcon from "../assets/images/icon-plus.svg";
import MinusIcon from "../assets/images/icon-minus.svg";
import ReplyIcon from "../assets/images/icon-reply.svg";
import DeleteIcon from "../assets/images/icon-delete.svg";
import EditIcon from "../assets/images/icon-edit.svg";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Button from "./Button";
import { useState } from "react";

interface Props {
  currentUser: CurrentUser;
  comment: Comment;
}

const CommentItem = ({ comment, currentUser }: Props) => {
  const [isReplying, setIsReplying] = useState(false);

  return (
    <>
      <li className="flex">
        <div className="flex flex-col">
          <button>
            <img src={PlusIcon} alt="plus" />
          </button>
          <span>{comment.score}</span>
          <button>
            <img src={MinusIcon} alt="minus" />
          </button>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <img src={comment.user.image.png} alt={comment.user.username} />
            <span>{comment.user.username}</span>
            {comment.user.username === currentUser.username && <p>you</p>}
            <span className="ml-2">{comment.createdAt}</span>
            <div className="flex gap-2 ml-auto">
              {comment.user.username === currentUser.username ? (
                <>
                  <Button startIcon={<img src={DeleteIcon} alt="delete" />}>
                    Delete
                  </Button>
                  <Button startIcon={<img src={EditIcon} alt="Edit" />}>
                    Edit
                  </Button>
                </>
              ) : (
                <Button startIcon={<img src={ReplyIcon} alt="reply" />}>
                  Reply
                </Button>
              )}
            </div>
          </div>
          <p>
            {comment.replyingTo ? (
              <>
                <span>
                  <b>@{comment.replyingTo}</b>{" "}
                </span>
                {comment.content}
              </>
            ) : (
              <>{comment.content}</>
            )}
          </p>
        </div>
      </li>
      {isReplying && (
        <CommentForm buttonChildren="REPLY" handleSubmit={() => {}} />
      )}
      {comment.replies?.length ? (
        <CommentList
          currentUser={currentUser}
          comments={comment.replies}
          isReplyList
        />
      ) : null}
    </>
  );
};

export default CommentItem;
