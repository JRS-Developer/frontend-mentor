import { ComponentFormProps } from "../types/types";
import Button from "./Button";
import Avatar from "./Avatar";

const CommentForm = ({
  handleSubmit,
  handleChange,
  value,
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

  const handleResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          className="hidden w-8 h-8 sm:block"
          src={currentUser.image}
          alt={currentUser.username}
        />
      ) : null}
      <textarea
        className="py-2 px-4 w-full rounded-md resize-none outline outline-1 text-n-dark-blue caret-p-moderate-blue outline-n-light-gray focus-visible:outline-1 focus-visible:outline-p-moderate-blue"
        placeholder={placeholder}
        rows={3}
        defaultValue={initialInputValue}
        onChange={(e) => {
          handleChange && handleChange(e);
          handleResize(e);
        }}
        value={value}
      ></textarea>
      <div className="flex items-center sm:items-start">
        {showAvatar && currentUser && (
          <Avatar
            className="w-8 h-8 sm:hidden"
            src={currentUser.image}
            alt={currentUser.username}
          />
        )}
        <Button
          type="submit"
          className="p-2 px-6 ml-auto h-12 text-white bg-p-moderate-blue hover:bg-p-light-gray"
        >
          {buttonChildren}
        </Button>
      </div>
    </form>
  );

  return (
    <>
      {showContainer ? (
        <div className="p-4 w-full bg-white">{renderForm()}</div>
      ) : (
        renderForm()
      )}
    </>
  );
};

export default CommentForm;
