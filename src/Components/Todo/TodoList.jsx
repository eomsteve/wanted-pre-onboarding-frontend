
import { TodoItem } from './TodoListItem';

export const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList &&
        todoList.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              todo={item.todo}
              isCompleted={item.isCompleted}
            />
          );
        })}
    </ul>
  );
};
