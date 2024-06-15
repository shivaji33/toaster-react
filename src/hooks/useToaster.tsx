import { useContext } from "react";
import { ToasterContext } from "../context/ToasterContext";

const useToaster = () => {
  const { addToast, removeToast } = useContext(ToasterContext);
  return { addToast, removeToast };
};

export default useToaster;
