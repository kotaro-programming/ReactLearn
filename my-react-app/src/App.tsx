// src/App.tsx
import { useState } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui", padding: 24}}>
      <h1>併存デモ</h1>
      <Greeting name="花子" />
      <Counter />
    </main>
  );
}
