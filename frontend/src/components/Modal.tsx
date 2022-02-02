import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal = ({ isOpen, onClose, title, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      {isOpen ? (
        <>
          <div className="bg-black/60 fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center">
            <div className="bg-white z-10 rounded-xl shadow-md p-8 min-h-[33%] max-w-sm mx-4 flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
              </div>
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
