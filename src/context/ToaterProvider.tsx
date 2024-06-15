import { ReactNode, useState } from "react";
import { QueueToastInterface, ToasterInterface } from "../utils/toaster.modal";
import { ToasterContext } from "./ToasterContext";
import Toast from "../components/Toast";
import { createPortal } from "react-dom";
import { ToasterPosition } from "../utils/toaster.enum";

const ToastPortal: React.FC<{
  position: ToasterPosition;
  toasts: QueueToastInterface[];
  removeToast: (id: string) => void;
}> = ({ position, toasts, removeToast }) => {
  const portalRoot = document.getElementById("toaster-portal");

  if (!portalRoot) return null;

  return createPortal(
    <div
      className={`toaster-container toaster-${position.toLowerCase()}-container`}
    >
      {toasts
        .filter((t) => t.position.includes(position))
        .map((toast, index) => (
          <Toast
            key={toast.toastId}
            toast={toast}
            removeToast={removeToast}
            index={index}
          />
        ))}
    </div>,
    portalRoot,
  );
};

const ToasterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<QueueToastInterface[]>([]);

  const addToast = (toast: ToasterInterface) => {
    const id = new Date().getTime().toString();
    setToasts((prevToasts) => [...prevToasts, { ...toast, toastId: id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.toastId !== id),
    );
  };

  return (
    <ToasterContext.Provider value={{ addToast, removeToast }}>
      {children}
      {Object.values(ToasterPosition).map((position) => (
        <ToastPortal
          key={position}
          position={position}
          toasts={toasts}
          removeToast={removeToast}
        />
      ))}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
