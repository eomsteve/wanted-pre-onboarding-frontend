import { TodoInputArea } from "../Components/Todo/TodoInputArea";
import { TodoList } from "../Components/Todo/TodoList";
export const TodoPage = ()=>{
  return <div className="Container mt-10 flex flex-col items-center w-[30vw] h-[100%]">
    <h1 className="my-10 font-[100] text-5xl">ToDo</h1>
    <TodoInputArea />
    <hr className="w-[100%] my-3 border-slate-800"/>
    <TodoList></TodoList>
  </div>
}