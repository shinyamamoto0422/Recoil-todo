import React, {useState} from "react";
import { useRecoilState } from "recoil";
import { useSetRecoilState } from "recoil";
import {taskState, counterState} from "./Atoms/Task.ts";

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const setTask = useSetRecoilState(taskState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  const onClick = () => {
    setTask(t => {
      return [...t, {title, completed: false}]
    })
    setTitle('');
  }
  return (
    <div>
      <label htmlFor="">
        タスク名
        <input type="text" value={title} onChange={onChange}/>
      </label>
      <button onClick={onClick}>登録</button>
    </div>
  )
}

// useRecoilState→
const CounterButton = () => {
  const [ count, setCount ] = useRecoilState(counterState)
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>発火</button>
    </>
  )
}

export const TaskList = () => {
  return (
    <>
      <TaskInput />
      <CounterButton />
    </>
  )
}