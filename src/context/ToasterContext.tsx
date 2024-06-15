import { createContext } from "react";
import { ToasterInterface } from "../utils/toaster.modal";

export interface ToasterContextInterface {
  addToast: (toast: ToasterInterface) => void;
  removeToast: (id: string) => void;
}
export const ToasterContext = createContext({
  addToast: (value: ToasterInterface) => {},
  removeToast: (id: string) => {},
});
