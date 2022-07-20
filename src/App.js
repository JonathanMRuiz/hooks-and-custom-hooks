import "./App.css";
import ClockHook from "./components/ClockHook";
import Counter from "./components/Counter";
import ScrollHook from "./components/ScrollHook";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <ScrollHook />
      <hr />
      <ClockHook />
    </div>
  );
}

export default App;
