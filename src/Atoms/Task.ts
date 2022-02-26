// atomはデータストア、keyは一意にする必要がある。defaultには初期値を設定している

import { atom } from 'recoil';

export interface Task {
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [];

export const taskState = atom({
  key: 'task',
  default: initialTasks,
})