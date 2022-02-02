import { ComponentFormProps } from "../types/types";
import Button from "./Button";

const CommentForm = ({
  handleSubmit,
  initialInputValue,
  buttonChildren = "Submit",
  formClasses,
  placeholder = "Add a comment...",
  ...rest
}: ComponentFormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`${formClasses} ? ${formClasses}: ''`}
      {...rest}
    >
      <textarea
        className="border border-1 rounded-sm"
        placeholder={placeholder}
      >
        {initialInputValue}
      </textarea>
      <Button type="submit">{buttonChildren}</Button>
    </form>
  );
};

export default CommentForm;
