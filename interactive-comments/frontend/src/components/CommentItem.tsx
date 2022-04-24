import { CurrentUser, Comment } from "../types/types";
import { formatDistanceToNow } from "date-fns";
import PlusIcon from "../assets/images/icon-plus.svg?component";
import MinusIcon from "../assets/images/icon-minus.svg?component";
import ReplyIcon from "../assets/images/icon-reply.svg?component";
import DeleteIcon from "../assets/images/icon-delete.svg?component";
import EditIcon from "../assets/images/icon-edit.svg?component";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Button from "./Button";
import Avatar from "./Avatar";
import Modal from "./Modal";
import { useState } from "react";
import {
  deleteComment,
  downvoteComment,
  saveComment,
  updateComment,
  upvoteComment,
} from "../services/comment";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  currentUser: CurrentUser;
  comment: Comment;
}

const CommentItem = ({ comment, currentUser }: Props) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [reply, setReply] = useState("");
  const [edit, setEdit] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const queryClient = useQueryClient();

  const replyMutation = useMutation(saveComment, {
    onSuccess: () => {
      setIsReplying(false);
      queryClient.invalidateQueries("comments");
    },
  });

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries("comments");
    },
  });

  const editMutation = useMutation(updateComment, {
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries("comments");
    },
  });

  const upvoteMutation = useMutation(upvoteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const downVoteMutation = useMutation(downvoteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const setNotEditing = () => setIsEditing(false);
  const toggleEditing = () => setIsEditing((isEditing) => !isEditing);

  const toggleReplying = () => setIsReplying((isReplying) => !isReplying);

  const handleDelete = () => {
    deleteMutation.mutate({
      commentId: comment.id,
      userId: currentUser.id,
    });
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotEditing();

    const changes = {
      commentId: comment.id,
      userId: currentUser.id,
      content: edit,
    };

    editMutation.mutate(changes);
    setEdit("");
  };

  const handleChangeEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setEdit(e.target.value);

  const handleReply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newReply = {
      content: reply,
      userId: currentUser.id,
      parentId: comment.id,
    };

    replyMutation.mutate(newReply);
  };

  const handleChangeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setReply(e.target.value);

  const handleUpvote = () =>
    upvoteMutation.mutate({
      commentId: comment.id,
      userId: currentUser.id,
    });

  const handleDownvote = () =>
    downVoteMutation.mutate({
      commentId: comment.id,
      userId: currentUser.id,
    });

  return (
    <>
      <li className="flex gap-4 p-4 bg-white rounded-md">
        <div className="hidden flex-col gap-2 justify-between items-center py-2 px-3 w-12 h-24 rounded sm:flex bg-n-v-light-gray">
          <button
            className="text-p-light-gray hover:text-p-moderate-blue"
            onClick={handleUpvote}
            aria-label="upvote"
          >
            <PlusIcon />
          </button>
          <span className="font-medium text-p-moderate-blue">
            {comment.score}
          </span>
          <button
            className="text-p-light-gray hover:text-p-moderate-blue"
            onClick={handleDownvote}
            aria-label="downvote"
          >
            <MinusIcon />
          </button>
        </div>
        <div className="w-full">
          <div className="flex gap-2 items-center">
            <Avatar
              src={comment.user.image}
              alt={comment.user.username}
              className="w-8 h-8"
            />
            <span className="ml-1 font-bold text-n-dark-blue">
              {comment.user.username}
            </span>
            {comment.user.username === currentUser.username && (
              <p className="py-px px-1.5 font-bold text-white rounded bg-p-moderate-blue">
                you
              </p>
            )}
            <span className="ml-2">
              {formatDistanceToNow(new Date(comment.createdAt))}
            </span>
            <div className="hidden gap-2 ml-auto sm:flex">
              {comment.user.username === currentUser.username ? (
                <>
                  <Button
                    onClick={handleOpen}
                    startIcon={<DeleteIcon />}
                    className="text-p-soft-red hover:text-p-pale-red"
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-p-moderate-blue hover:text-p-light-gray"
                    startIcon={<EditIcon />}
                    onClick={toggleEditing}
                  >
                    Edit
                  </Button>
                </>
              ) : (
                <Button
                  className="text-p-moderate-blue hover:text-p-light-gray"
                  startIcon={<ReplyIcon />}
                  onClick={toggleReplying}
                >
                  Reply
                </Button>
              )}
            </div>
          </div>
          {isEditing ? (
            <CommentForm
              handleSubmit={handleEdit}
              handleChange={handleChangeEdit}
              initialInputValue={
                comment.replyingTo
                  ? `@${comment.replyingTo} ${comment.content}`
                  : comment.content
              }
              formClasses="mt-2 w-full"
              buttonChildren="UPDATE"
            />
          ) : (
            <p className="mt-2">
              {comment.replyingTo && (
                <span className="text-p-moderate-blue">
                  <b>@{comment.replyingTo}</b>{" "}
                </span>
              )}
              {comment.content}
            </p>
          )}
          <footer className="flex mt-2 sm:hidden">
            <div className="flex gap-4 justify-between items-center py-2 px-3 rounded bg-n-v-light-gray">
              <button
                className="text-p-light-gray hover:text-p-moderate-blue"
                onClick={handleUpvote}
                aria-label="upvote"
              >
                <PlusIcon />
              </button>
              <span className="font-medium text-p-moderate-blue">
                {comment.score}
              </span>
              <button
                className="text-p-light-gray hover:text-p-moderate-blue"
                onClick={handleDownvote}
                aria-label="downvote"
              >
                <MinusIcon />
              </button>
            </div>
            <div className="flex gap-2 ml-auto">
              {comment.user.username === currentUser.username ? (
                <>
                  <Button
                    onClick={handleOpen}
                    startIcon={<DeleteIcon />}
                    className="text-p-soft-red hover:text-p-pale-red"
                  >
                    Delete
                  </Button>
                  <Button
                    className="text-p-moderate-blue hover:text-p-light-gray"
                    startIcon={<EditIcon />}
                    onClick={toggleEditing}
                  >
                    Edit
                  </Button>
                </>
              ) : (
                <Button
                  className="text-p-moderate-blue hover:text-p-light-gray"
                  startIcon={<ReplyIcon />}
                  onClick={toggleReplying}
                >
                  Reply
                </Button>
              )}
            </div>
          </footer>
        </div>
      </li>
      {isReplying && (
        <CommentForm
          showContainer={true}
          currentUser={currentUser}
          showAvatar={true}
          buttonChildren="REPLY"
          handleSubmit={handleReply}
          handleChange={handleChangeReply}
          formClasses="flex flex-col sm:flex-row gap-4"
        />
      )}
      {comment.replies?.length ? (
        <CommentList
          currentUser={currentUser}
          comments={comment.replies}
          isReplyList
        />
      ) : null}
      <Modal isOpen={openModal} onClose={handleClose} title="Delete comment">
        <div className="flex flex-col gap-4 h-full">
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone
          </p>
          <div className="flex gap-4 mt-auto">
            <Button
              onClick={handleClose}
              className="py-2 px-4 w-full text-white rounded-md bg-n-gray-blue hover:bg-n-light-gray hover:text-n-gray-blue"
            >
              NO, CANCEL
            </Button>
            <Button
              onClick={handleDelete}
              className="py-2 px-4 w-full text-white rounded-md bg-p-soft-red hover:bg-p-pale-red"
            >
              YES, DELETE
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CommentItem;
