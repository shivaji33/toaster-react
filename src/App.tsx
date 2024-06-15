import "./App.css";
import Home from "./components/Home";
import ToasterProvider from "./context/ToaterProvider";

function App() {
  return (
    <>
      <ToasterProvider>
        <Home />
      </ToasterProvider>
    </>
  );
}

export default App;
