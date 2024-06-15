import useToaster from "../hooks/useToaster";

const Home = () => {
  const { addToast } = useToaster();

  const onShowToaster = (value) => {
    addToast({
      position: "bottom-right",
      autoClose: value,
      message: `Form Sumitted! ${value}`,
      type: "info",
    });
  };

  return (
    <div>
      <button onClick={onShowToaster.bind(null, 5000)}>Show Toaster (5sec)</button><br />
      <button onClick={onShowToaster.bind(null,3000)}>Show Toaster (3sec)</button>

    </div>
  );
};

export default Home;
