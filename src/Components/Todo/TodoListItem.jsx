import { useState } from "react";
import { TodoDeleteButton } from "./TodoDelete";
import { TodoModifyButton } from "./TodoModify";
import { TodoSubmitButton } from "./TodoSubmit";
export const TodoItem = ({value}) => {
  const [isModify, setIsModify] = useState(false);
  return (
    <li className="w-[100%] flex border-b-2 p-2">
      <label className="" htmlFor="todo">
        <input className="mx-1" type="checkbox" id="todo" />
        <span className="mx-3 grow">Todo items</span>
        {isModify ? <TodoSubmitButton/> :<TodoModifyButton />}
        <TodoDeleteButton />
      </label>
    </li>
  );
};
