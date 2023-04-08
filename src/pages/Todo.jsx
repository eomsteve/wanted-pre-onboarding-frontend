import { useState, useEffect } from 'react';
import { TodoInputArea } from '../Components/Todo/TodoInputArea';
import { TodoList } from '../Components/Todo/TodoList';
import { getTodo } from '../api/todo';
export const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [dataChanged , setDataChanged] = useState(false);
  useEffect(() => {
    async function fetchTodoList() {
      const { data } = await getTodo();
      setTodoList(() => data);
    }
    fetchTodoList();
  }, [dataChanged]);

  const dataObserver=() =>{
    setDataChanged(() => true);
  }
  return (
    <div className="Container mt-10 flex flex-col items-center w-[30vw] h-[100%]">
      <h1 className="my-10 font-[100] text-5xl">ToDo</h1>
      <TodoInputArea todoList={todoList} dataObserver={dataObserver}/>
      <hr className="w-[100%] my-3 border-slate-800" />
      <TodoList todoList={todoList} />
    </div>
  );
};
