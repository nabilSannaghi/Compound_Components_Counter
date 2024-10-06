import "./styles.css";
import Counter from "./Counter";
export default function App() {
  return (
    <div className="App">
      <h1>Hello Counter</h1>

      <Counter>
        <div>
          <Counter.Label> play with your Counter </Counter.Label>
        </div>
        <Counter.Decrease />
        <Counter.Count />
        <Counter.Increase />
      </Counter>
    </div>
  );
}
