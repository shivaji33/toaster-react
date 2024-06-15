import { useEffect } from "react";
import { QueueToastInterface } from "../utils/toaster.modal";
import { createPortal } from "react-dom";
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai";

const Toast: React.FC<{
  toast: QueueToastInterface;
  removeToast: (id: string) => void;
  index: number;
}> = ({ toast, removeToast, index }) => {
  useEffect(() => {
    if (toast) {
        const timer = setTimeout(() => {
            removeToast(toast.toastId);
          }, toast.autoClose);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [toast.toastId, toast.autoClose, removeToast]);

  const getPositionStyle = () => {
    const offset = index * 60 + 10;
    switch (toast.position) {
      case "top-right":
        return { top: `${offset}px` };
      case "top-left":
        return { top: `${offset}px` };
      case "bottom-right":
        return { bottom: `${offset}px` };
      case "bottom-left":
        return { bottom: `${offset}px` };
      default:
        return {};
    }
  };

  return createPortal(
    <div
      className={`toaster toaster-${toast.position} toaster-${toast.type}`}
      style={getPositionStyle()}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineInfoCircle />
        <span style={{ paddingLeft: ".25rem", paddingRight: ".25rem" }}>
          {toast.message}
        </span>
      </div>
      <AiOutlineClose onClick={() => removeToast(toast.toastId)} />
    </div>,
    document.getElementById("toaster-portal")!,
  );
};

export default Toast;
