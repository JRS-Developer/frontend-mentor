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
      <li className="flex bg-white rounded p-4 gap-4">
        <div className="flex flex-col items-center justify-between bg-n-v-light-gray py-2 px-3 rounded w-12 h-24 gap-2">
          <button>
            <img src={PlusIcon} alt="plus" />
          </button>
          <span className="text-p-moderate-blue font-bold">
            {comment.score}
          </span>
          <button>
            <img src={MinusIcon} alt="minus" />
          </button>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <img
              className="h-8 w-8 rounded-full"
              src={comment.user.image.png}
              alt={comment.user.username}
            />
            <span className="text-n-dark-blue font-bold ml-1">
              {comment.user.username}
            </span>
            {comment.user.username === currentUser.username && (
              <p className="rounded font-bold bg-p-moderate-blue text-white px-1.5 py-px">
                you
              </p>
            )}
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
          <p className="mt-2">
            {comment.replyingTo ? (
              <>
                <span className="text-p-moderate-blue">
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
