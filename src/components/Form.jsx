import { useState } from "react";
import { Button } from "./UI/Button";

export function Form(props) {
  const [input, setInput] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    props.onAdd(input);
    setInput("");
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        className="border border-black rounded-md mr-4 p-1"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="submit"
        className="border border-gray-800 rounded-lg p-1 px-3 cursor-pointer hover:bg-gray-200 transition-all ease-in-out"
      >
        Add Todo
      </Button>
    </form>
  );
}
