export const TodoInputBox = () => {
  return (
    <input
      className="border-2 grow px-1"
      type="text"
      name="todo"
      id="inputBox"
      data-testid="new-todo-input"
    />
  );
};
