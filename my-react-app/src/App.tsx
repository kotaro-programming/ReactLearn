// src/App.tsx
import { useState } from "react";
import Greeting from "./components/Greeting";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui", padding: 24}}>
      <h1>部品化の第一歩</h1>
      <Greeting name="太郎" />
    </main>
  );
}
