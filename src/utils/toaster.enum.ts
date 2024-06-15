export enum ToasterPosition {
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
}

export enum ToastType {
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  ERROR = "error",
}

export type ToasterShowType =
  | ToastType.SUCCESS
  | ToastType.WARNING
  | ToastType.INFO
  | ToastType.ERROR;

export type ToasterPositionType =
  | ToasterPosition.TOP_LEFT
  | ToasterPosition.TOP_RIGHT
  | ToasterPosition.BOTTOM_LEFT
  | ToasterPosition.BOTTOM_RIGHT;

export enum ToasterColor {
  success = "#07bc0c",
  info = "#3498db",
  warning = "#f1c40f",
  error = "#e74c3c",
}
