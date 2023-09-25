import { TodoListItem } from "./TodoListItem";

export function TodoList(props) {
  return (
    <ul className="mt-4 pt-4 border-gray-300 border-t-2">
      {props.todos.map((item) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            onComplete={() => props.onComplete(item.id)}
            onDelete={() => props.onDelete(item.id)}
          >
            {item.text}
          </TodoListItem>
        );
      })}
    </ul>
  );
}
