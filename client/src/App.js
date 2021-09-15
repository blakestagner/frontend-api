import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
