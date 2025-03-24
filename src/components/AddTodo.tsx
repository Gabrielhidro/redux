import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(add({ newTodo }));
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}
