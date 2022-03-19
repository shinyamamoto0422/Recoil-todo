import { useEffect, useState } from 'react';
import { 
  RecoilRoot,
} from 'recoil';
import {TodoList} from './components/TodoList.jsx';

const getTodoList = async () => {
  return ["遊ぶ","買い物","宿題"];
};

const useTodo = () => {
  const [state, setState] = useState(null);
  useEffect(() => {
    getTodoList().then(todoList => {
      setState(todoList);
    });
  },[]);
  return state;
};

function App() {
  const state = useTodo();
  return (
    <RecoilRoot>
      <TodoList/>
      <ul>
        {state ? state.map((e) => <li key={e}>{e}</li>) : "loading"}
      </ul>
    </RecoilRoot>
  );
}

export default App;
