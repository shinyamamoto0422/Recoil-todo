import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../status/atoms.jsx';

export const Filter = () => {
  const [ filter, setFilter ] = useRecoilState(todoListFilterState);
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <select value={filter} onChange={handleChange}>
      <option value="all">全て</option>
      <option value="complete">完了</option>
      <option value="incomplete">未完了</option>
    </select>
  );
};