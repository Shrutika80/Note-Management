// styles.ts
import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const NoteContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const NoteTitle = styled.h3`
  margin: 0 0 10px 0;
`;

export const TaskListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li<{ completed: boolean }>`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
