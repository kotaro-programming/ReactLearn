// src/App.tsx
import { useState } from "react";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24}}>
      <h1>小さなアプリ</h1>
      <TodoApp />
    </main>
  );
}
