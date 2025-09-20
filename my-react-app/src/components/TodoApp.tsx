import { useState } from "react";

type Todo = { id: number; title: string; done: boolean };

export default function TodoApp(){
    const [text, setText] = useState("");
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: "React を入れる", done: true },
        { id: 2, title: "UI を作る", done: false},
    ]);

    const add = () => {
        const title = text.trim();
        if (!title) return;
        setTodos((list) => [...list, { id: Date.now(), title, done: false }]);
        setText("");
    };

    return (
        <section style={{ marginTop: 24 }}>
            <h2>ToDo</h2>
            <div style={{ display: "flex", gap: 8 }}>
                <input
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 placeholder="やることを入力" 
                />
                <button onClick={add}>追加</button>
            </div>
            <ul></ul>
        </section>
    );
}