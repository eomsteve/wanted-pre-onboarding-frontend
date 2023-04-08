import { deleteTodo } from "../../api/todo";

export const TodoDeleteButton = ({id,dataObserver}) => {
  const deleteItem = async()=>{
    await deleteTodo(id);
    dataObserver()
  }
  return (
    <button
      className="border-2 ml-1 px-1 border-red-400 text-red-600"
      type="submit"
      data-testid="delete-button"
      onClick={deleteItem}
    >
      삭제
    </button>
  );
};
