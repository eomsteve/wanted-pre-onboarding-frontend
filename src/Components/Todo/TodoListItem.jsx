import { useState, useEffect } from 'react';
import { TodoDeleteButton } from './TodoDelete';
import { TodoModifyButton } from './TodoModify';
import { TodoSubmitButton } from './TodoSubmit';
import { TodoCancelButton } from './TodoCancel';
import { TodoModifyInput } from './TodoModifyInput';
import { updateTodo } from '../../api/todo';
import { ModifyForm } from './TodoModifyForm';
export const TodoItem = ({ id, todo, isCompleted, dataObserver }) => {
  const [isModify, setIsModify] = useState(false);
  const [checked, setChecked] = useState(isCompleted);
  const modifyModeHandler = () => {
    setIsModify(() => !isModify);
  };
  const modifySubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateData = {
      todo: formData.get('modifyInput'),
      isCompleted: checked,
    };
    await updateTodo(id, updateData);
    if (isModify === true) {
      modifyModeHandler();
    }
    dataObserver();
  };
  const checkboxStateChange = () => {
    setChecked(() => !checked);
  };
  useEffect(() => {
    const checkUpdate = async () => {
      const updateData = {
        todo: todo,
        isCompleted: checked,
      };
      await updateTodo(id, updateData);
      dataObserver();
    };
    checkUpdate();
  }, [checked]);
  return (
    <li className="w-[100%] flex border-b-2 p-2">
      <div className="w-[100%] flex justify-between flex-grow-5 items-center">
        <label htmlFor={`${id}`}>
          <input
            className="mx-1"
            type="checkbox"
            id={`${id}`}
            name="checkbox"
            onChange={checkboxStateChange}
            checked={checked}
          />
          {isModify ? '' : <span className="mx-3 grow">{todo}</span>}
        </label>
        {isModify ? (
          <ModifyForm
            modifySubmitHandler={modifySubmitHandler}
            dataObserver={dataObserver}
            todo={todo}
            modifyModeHandler={modifyModeHandler}
          />
        ) : (
          <div>
            <TodoModifyButton modifyModeHandler={modifyModeHandler} />
            <TodoDeleteButton id={id} dataObserver={dataObserver} />
          </div>
        )}
      </div>
    </li>
  );
};
