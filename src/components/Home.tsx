import { useState } from "react";
import useToaster from "../hooks/useToaster";
import { ToasterPosition, ToastType } from "../utils/toaster.enum";

const Home = () => {
  const { addToast } = useToaster();
  const [formData, setFormData] = useState({
    position: ToasterPosition.TOP_LEFT,
    delay: 5000,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    type: ToastType.ERROR,
  });

  const onShowToaster = () => {
    if (!formData?.delay || !formData?.message) {
      addToast({
        position: ToasterPosition.TOP_RIGHT,
        autoClose: 2000,
        message: "Invalid Form!",
        type: ToastType.ERROR,
      });
    } else {
      addToast({
        position: formData.position,
        autoClose: formData?.delay,
        message: formData?.message,
        type: formData?.type,
      });
    }
  };

  const inputChange = (e: any, key: string) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="home-input-wrapper">
      <label htmlFor="toast-message">Message</label>
      <textarea
        type="text"
        value={formData.message}
        onChange={(e) => inputChange(e, "message")}
      />
      <label htmlFor="toast-delay">Delay (ms)</label>
      <input
        type="number"
        value={formData.delay}
        onChange={(e) => inputChange(e, "delay")}
      />
      <label htmlFor="toast-position">Position</label>
      <select
        name=""
        id="toast-position"
        value={formData.position}
        onChange={(e) => inputChange(e, "position")}
      >
        {Object.values(ToasterPosition).map((v) => (
          <option value={v}>{v}</option>
        ))}
      </select>
      <label htmlFor="toast-type">Type</label>
      <select
        name=""
        id="toast-type"
        value={formData.type}
        onChange={(e) => inputChange(e, "type")}
      >
        {Object.values(ToastType).map((v) => (
          <option value={v}>{v}</option>
        ))}
      </select>
      <button type="button" onClick={onShowToaster}>
        Show Toaster
      </button>
    </div>
  );
};

export default Home;
