import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../status/selector.jsx';

export const Stats = () => {
  const {
    totalNum,
    totalCompleteNum,
    totalIncompleteNum
  } = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
      <li>完了したTodoの数:{totalCompleteNum}</li>
      <li>未完了のTodoの数:{totalIncompleteNum}</li>
    </ul>
  );
}
