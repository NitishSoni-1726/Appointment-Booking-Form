import "./App.css";
import Form from "./components/Form";
import background from "./assets/image/background/background1.jpg";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center App"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Form />
    </div>
  );
}

export default App;
