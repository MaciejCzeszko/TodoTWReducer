import { Button } from "./UI/Button";

export function TodoListItem({ children, onComplete, onDelete, item }) {
  return (
    <li className="flex justify-between gap-4 max-w-md mb-2">
      <p
        className={`break-all ${
          item.completed ? "line-through text-gray-700" : ""
        }`}
      >
        {children}
      </p>
      <div className="flex gap-2">
        <Button
          handleClick={() => onComplete(item.id)}
          className="mx-4 border border-gray-800 rounded-lg p-1 px-3 cursor-pointer hover:bg-gray-200 transition-all ease-in-out"
        >
          Complete
        </Button>
        <Button
          handleClick={() => onDelete(item.id)}
          className="border border-gray-800 rounded-lg p-1 px-3 cursor-pointer hover:bg-gray-200 transition-all ease-in-out"
        >
          Delete
        </Button>
      </div>
    </li>
  );
}
