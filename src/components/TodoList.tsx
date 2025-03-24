import { useSelector } from "react-redux";

export function TodoList() {
  const store = useSelector((store) => store.todo);

  return (
    <ul>
      {store.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
