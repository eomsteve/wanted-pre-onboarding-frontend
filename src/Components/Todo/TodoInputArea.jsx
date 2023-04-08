import { TodoAddButton } from './TodoAdd';
import { TodoInputBox } from './TodoInput';
import { createTodo } from '../../api/todo';

export const TodoInputArea = ({todoList, dataObserver}) => {
  const AddTodo = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userInput = { todo: formData.get('todo') };
    await createTodo(userInput);
    const inputBox = document.getElementById("inputBox");
    inputBox.value = '';
    dataObserver()
  };
  return (
    <div className="w-[100%] h-[2rem] ">
      <form onSubmit={AddTodo} className="flex justify-between flex-grow-3">
        <TodoInputBox />
        <TodoAddButton />
      </form>
    </div>
  );
};
