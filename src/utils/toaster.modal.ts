import { ToasterPositionType } from "./toaster.enum";

export interface ToasterInterface {
  position: ToasterPositionType;
  autoClose: number;
  message: string;
  type: "sucess" | "warning" | "info" | "error";
}

export interface QueueToastInterface extends ToasterInterface {
  toastId: string;
}
