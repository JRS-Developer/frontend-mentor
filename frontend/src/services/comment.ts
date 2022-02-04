import axios from "axios";
import { apiUrl } from "../config/api";
import { Comment, User } from "../types/types";

interface saveCommentProps {
  content: string;
  parentId?: number;
  userId: User["id"];
}

interface updateCommentProps extends Partial<Comment> {
  commentId: number;
}

export const getComments = async (): Promise<Comment[]> => {
  const comments = await axios.get<Comment[]>(`${apiUrl}/comments`);
  return comments.data;
};

export const saveComment = async (c: saveCommentProps): Promise<Comment> => {
  const comment = await axios.post<Comment>(`${apiUrl}/comments`, { ...c });
  return comment.data;
};

export const updateComment = async ({
  commentId,
  ...rest
}: updateCommentProps) => {
  const comment = await axios.put<Comment>(`${apiUrl}/comments${commentId}`, {
    ...rest,
  });
  return comment.data;
};

export const deleteComment = async (id: Comment["id"]) => {
  return await axios.delete(`${apiUrl}/comments/${id}`);
};
