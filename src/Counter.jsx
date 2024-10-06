import { createContext, useContext, useState } from "react";

const CouneterContext = createContext();

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  function increase() {
    return setCount((s) => s + 1);
  }
  function decrease() {
    return setCount((s) => (s === 0 ? 0 : s - 1));
  }

  return (
    <CouneterContext.Provider value={{ count, increase, decrease }}>
      <div>{children}</div>
    </CouneterContext.Provider>
  );
}

Counter.Label = function Label({ children }) {
  return <span>{children}</span>;
};

Counter.Count = function Count() {
  const { count } = useContext(CouneterContext);
  return <span>{count}</span>;
};

Counter.Increase = function Increase({ text }) {
  const { increase } = useContext(CouneterContext);
  return <button onClick={increase}>{text ? text : "+"}</button>;
};

Counter.Decrease = function Decrease({ text }) {
  const { decrease } = useContext(CouneterContext);
  return <button onClick={decrease}>{text ? text : "-"}</button>;
};
