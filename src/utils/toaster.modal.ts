import { ToasterPositionType,ToasterShowType } from "./toaster.enum";

export interface ToasterInterface {
  position: ToasterPositionType;
  autoClose: number;
  message: string;
  type: ToasterShowType;
}

export interface QueueToastInterface extends ToasterInterface {
  toastId: string;
}

