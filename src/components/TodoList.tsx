// useAppSelector: Buscar informações do Estado (STORE)
import { useAppSelector } from "../store";

export default function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo;
  });
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
