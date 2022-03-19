import { atom } from 'recoil';
// todoのリストを共有する
export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      title: 'タスクを作成しましょう！',
      isComplete: false,
    },
  ],
});

// 選択した値がコンポーネント間で共有されるようにする
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: "all",
});