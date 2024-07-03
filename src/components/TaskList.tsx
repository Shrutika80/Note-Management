import React, { useState } from 'react';
import { Task } from '../types';
import styled from 'styled-components';

const TaskWrapperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  accent-color: #4caf50;
`;

const TaskText = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#a9a9a9' : '#333')};
  font-size: 16px;
`;

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = taskList.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks.sort((a, b) => Number(a.completed) - Number(b.completed)));
  };

  return (
    <TaskWrapperList>
      {taskList.map(task => (
        <TaskItem key={task.id}>
          <Checkbox
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <TaskText completed={task.completed}>{task.text}</TaskText>
        </TaskItem>
      ))}
    </TaskWrapperList>
  );
};

export default TaskList;
