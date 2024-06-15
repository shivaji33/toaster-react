import { ReactNode, useState } from "react";
import { QueueToastInterface, ToasterInterface } from "../utils/toaster.modal";
import { ToasterContext } from "./ToasterContext";
import Toast from "../components/Toast";

export const ToasterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
      {toasts.map((toast, index) => (
        <Toast key={toast.toastId} toast={toast} removeToast={removeToast} index={index} />
      ))}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;
