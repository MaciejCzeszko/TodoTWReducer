export function Button(
  { children, id, type = "button", handleClick = null },
  props
) {
  return (
    <button
      id={id}
      type={type}
      onClick={handleClick}
      className="border border-gray-800 rounded-lg p-1 px-3 cursor-pointer hover:bg-gray-200 transition-all ease-in-out"
    >
      {children}
    </button>
  );
}
