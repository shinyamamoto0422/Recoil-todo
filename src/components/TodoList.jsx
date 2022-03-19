// atomはデータストア
// デフォルト値とkeyが必要
// key→Atomを識別する文字列で、グローバルにユニークである必要がある
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../status/selector.jsx';
import { TodoItem } from './TodoItem.jsx';
import { Creator } from './Creator.jsx';
import { Stats } from './Stats.jsx';
import { Filter } from './Filter.jsx';

export const TodoList = () => {
  // todoListStateを取得する
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <Stats />
      <Creator />
      <Filter />
      {todoList.map((item) => {
        return <TodoItem key={item.id} item={item}/>
      })}
    </>
  )
};
