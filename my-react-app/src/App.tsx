// src/App.tsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>はじめての React（TypeScript）</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount((v) => v + 1)}>+1</button>
    </main>
  );
}
