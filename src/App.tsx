import "./App.css";
import Home from "./components/Home";
import ToasterProvider from "./context/ToaterProvider";

function App() {
  return (
    <>
      <ToasterProvider>
        <Home />
        <p>Home component!</p>
      </ToasterProvider>
    </>
  );
}

export default App;
