import { ComponentFormProps, CurrentUser } from "../types/types";
import CommentForm from "./CommentForm";

interface Props extends ComponentFormProps {
  currentUser: CurrentUser;
}

const CommentFormContainer = ({ currentUser, ...rest }: Props) => {
  return (
    <div className="flex w-full bg-white">
      <img src={currentUser.image.png} alt={currentUser.username} />
      <CommentForm {...rest} />
    </div>
  );
};

export default CommentFormContainer;
