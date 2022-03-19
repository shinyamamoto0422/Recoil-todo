import { useRecoilState } from "recoil";

import { todoListState } from "../status/atoms.jsx";

export const TodoItem = ({item}) => {
  const [ todoList, setTodoList ] = useRecoilState(todoListState);
  const deleteItem = () => {
    setTodoList(todoList.filter((todo) => todo.id !== item.id));
  };

  const toggleItemComplete = () => {
    const index = todoList.findIndex(todo => todo.id === item.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      {
        ...todoList[index],
        isComplete: !todoList[index].isComplete,
      },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <button onClick={toggleItemComplete} style={{ cursor:'pointer' }}>{item.isComplete ? "完" : "未"}</button>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: 'pointer' }}>×</span>
    </div>
  )
};