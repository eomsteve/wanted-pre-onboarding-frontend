import { TodoAddButton } from './TodoAdd';
import { TodoInputBox } from './TodoInput';

export const TodoInputArea = () => {
  const AddTodo = (event) => {
    event.preventDefault();

    const formData = new FormData();
    const userInput = formData.get('userInput');
  };
  return (
    <div className='w-[100%] h-[2rem] '>
      <form onSubmit={AddTodo} className='flex justify-between flex-grow-3'>
        <TodoInputBox />
        <TodoAddButton />
      </form>
    </div>
  );
};
