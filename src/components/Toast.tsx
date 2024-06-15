import { useEffect, useState } from "react";
import { QueueToastInterface } from "../utils/toaster.modal";
import { createPortal } from "react-dom";
import { AiOutlineInfoCircle, AiOutlineClose } from "react-icons/ai";
import ProgressBar from "./ProgressBar";
import { ToasterColor } from "../utils/toaster.enum";

const Toast: React.FC<{
  toast: QueueToastInterface;
  removeToast: (id: string) => void;
  index: number;
}> = ({ toast, removeToast, index }) => {
  const [progressbarWidth, setProgressbarWidth] = useState<number>(
    toast.autoClose,
  );

  useEffect(() => {
    let timer, intervel;
    if (toast) {
      timer = setTimeout(() => {
        removeToast(toast.toastId);
      }, toast.autoClose);

      intervel = setInterval(() => {
        setProgressbarWidth((prev: number) => (prev > 0 ? prev - 100 : 0));
      }, 100);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(intervel);
    };
  }, [toast.toastId, toast.autoClose]);

  const itemsCenter = {
    display: "flex",
    alignItems: "center",
  };
  const toasterContainer = {
    position: "absolute",
    top: "3px",
    right: "7px",
    cursor: "pointer",
  };

  const toasterInner = {
    ...itemsCenter,
    padding: "1rem",
    paddingBottom: "0",
  };

  return (
    <div className={`toaster`} style={{ background: ToasterColor[toast.type] }}>
      <div style={toasterContainer}>
        <AiOutlineClose size={12} onClick={() => removeToast(toast.toastId)} />
      </div>
      <div style={toasterInner}>
        <div style={itemsCenter}>
          <AiOutlineInfoCircle
            style={{
              minWidth: "24px",
            }}
            size={24}
          />
          <span style={{ paddingLeft: ".25rem", paddingRight: ".25rem" }}>
            {toast.message}
          </span>
        </div>
      </div>
      <div
        style={{
          paddingTop: ".5rem",
          width: "100%",
        }}
      >
        <ProgressBar width={(progressbarWidth / toast.autoClose) * 100} />
      </div>
    </div>
  );
};

export default Toast;
