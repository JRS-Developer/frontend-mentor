import { ComponentFormProps } from "../types/types";
import Button from "./Button";
import Avatar from "./Avatar";

const CommentForm = ({
  handleSubmit,
  initialInputValue,
  buttonChildren = "SEND",
  formClasses = "",
  placeholder = "Add a comment...",
  formAttrs,
  showAvatar = false,
  showContainer = false,
  currentUser,
}: ComponentFormProps) => {
  const defaultClasses = "flex gap-4";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;

    // This is to change the height of the textarea when the user is typing, this avoid to show the scrollbar
    target.style.height = "90px";
    target.style.height = `${target.scrollHeight}px`;
  };

  const renderForm = () => (
    <form
      onSubmit={handleSubmit}
      className={`${defaultClasses} ${formClasses}`}
      {...formAttrs}
    >
      {showAvatar && currentUser ? (
        <Avatar
          className="h-8 w-8 hidden sm:block"
          src={currentUser.image.png}
          alt={currentUser.username}
        />
      ) : null}
      <textarea
        className="outline outline-1 text-n-dark-blue caret-p-moderate-blue outline-n-light-gray rounded-md py-2 px-4 focus-visible:outline-1 focus-visible:outline-p-moderate-blue resize-none 
  w-full"
        placeholder={placeholder}
        rows={3}
        defaultValue={initialInputValue}
        onChange={handleChange}
      ></textarea>
      <div className="flex items-center sm:items-start">
        {showAvatar && currentUser && (
          <Avatar
            className="h-8 w-8 sm:hidden"
            src={currentUser.image.png}
            alt={currentUser.username}
          />
        )}
        <Button
          type="submit"
          className="text-white bg-p-moderate-blue hover:bg-p-light-gray p-2 px-6 h-12 ml-auto"
        >
          {buttonChildren}
        </Button>
      </div>
    </form>
  );

  return (
    <>
      {showContainer ? (
        <div className=" w-full bg-white p-4">{renderForm()}</div>
      ) : (
        renderForm()
      )}
    </>
  );
};

export default CommentForm;
