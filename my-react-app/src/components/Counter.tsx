// src/components/Counter.tsx
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <button onClick={() => setValue((v) => v - 1)}>-</button>
      <strong>{value}</strong>
      <button onClick={() => setValue((v) => v + 1)}>+</button>
    </div>
  );
}
