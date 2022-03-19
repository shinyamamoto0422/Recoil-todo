import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../status/atoms.jsx';

let id = 1;
const getId = () => {
  return id++;
}

export const Creator = () => {
  const [title, setTitle] = useState('');
  // todoListStateを更新するsetter関数
  const setTodoList = useSetRecoilState(todoListState);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    // 共有した状態の更新をする
    if (title === '') return;
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle('');
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
};
