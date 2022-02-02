import { FormHTMLAttributes, ReactNode } from "react";

export interface Image {
  png: string;
  webp: string;
}

export interface CurrentUser extends User {}

export interface User {
  image: Image;
  username: string;
}

export interface Reply extends Comment {}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string;
  replies?: Reply[];
}

export interface CommentsData {
  currentUser: CurrentUser;
  comments: Comment[];
}

// Componentes
export interface ComponentFormProps
  extends FormHTMLAttributes<HTMLFormElement> {
  initialInputValue?: string;
  handleSubmit: () => void;
  buttonChildren?: ReactNode;
  formClasses?: string;
  placeholder?: string;
}
