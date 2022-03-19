// selectorは、atomsの状態を操作したいときに使う。
import { selector } from 'recoil';
import { todoListState, todoListFilterState } from './atoms.jsx';

//todoListの状態からその配列の数に変換している
export const todoListStatsState = selector({
  key: 'todoListStatusState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter((todo) => todo.isComplete).length;
    const totalIncompleteNum = totalNum - totalCompleteNum;
    return {
      totalNum,
      totalCompleteNum,
      totalIncompleteNum,
    };
  }
})

//filterの状態を利用して、表示するリストを変更できるようにする
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case 'complete':
        return list.filter((todo) => todo.isComplete);
      case 'incomplete':
        return list.filter((todo) => !todo.isComplete);
      default:
        return list;
    }
  },
});
