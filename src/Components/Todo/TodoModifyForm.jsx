import { TodoSubmitButton } from './TodoSubmit';
import { TodoCancelButton } from './TodoCancel';
import { TodoModifyInput } from './TodoModifyInput';

export const ModifyForm = ({
  modifySubmitHandler,
  dataObserver,
  todo,
  modifyModeHandler,
}) => {
  return (
    <form onSubmit={modifySubmitHandler} className="flex w-[100%] ">
      <TodoModifyInput prevValue={todo} />
      <TodoSubmitButton dataObserver={dataObserver} />
      <TodoCancelButton  modifyModeHandler={modifyModeHandler}/>
    </form>
  );
};
