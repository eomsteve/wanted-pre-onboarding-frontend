import { useState } from "react";
import { TodoDeleteButton } from "./TodoDelete";
import { TodoModifyButton } from "./TodoModify";
import { TodoSubmitButton } from "./TodoSubmit";
export const TodoItem = ({id, todo, isCompleted}) => {
  const [isModify, setIsModify] = useState(false);
  return (
    <li className="w-[100%] flex border-b-2 p-2">
      <label className="w-[100%] flex flex-grow-5 items-center" htmlFor={`${id}`}>
        <input className="mx-1" type="checkbox" id={`${id}`} />
        <span className="mx-3 grow">{todo}</span>
        {isModify ? <TodoSubmitButton/> :<TodoModifyButton />}
        <TodoDeleteButton />
      </label>
    </li>
  );
};
