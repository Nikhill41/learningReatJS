import Parent from "./components/parent";
import "./App.css";

function App() {
  const userName = "Nikhil";

  return (
    <div className="app-container">
      <h1>Props Drilling Example</h1>
      <Parent userName={userName} />
    </div>
  );
}

export default App;
