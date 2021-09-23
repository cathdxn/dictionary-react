import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          <a href="https://github.com/cathdxn/dictionary-react">
            Open-sourced code
          </a>{" "}
          by Catherine Dixon
        </footer>
      </div>
    </div>
  );
}

export default App;
