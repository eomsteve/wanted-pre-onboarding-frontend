
import { TodoItem } from './TodoListItem';

export const TodoList = ({todoList, dataObserver}) => {
  return (
    <ul className='w-[100%]'>
      {todoList &&
        todoList.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              todo={item.todo}
              isCompleted={item.isCompleted}
              dataObserver={dataObserver}
            />
          );
        })}
    </ul>
  );
};
