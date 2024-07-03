import React, { useState } from 'react';
import TaskList from './TaskList';
import { Note } from '../types';
import styled from 'styled-components';

const NoteItemSection = styled.section`
  padding: 10px;
  background-color: #ECE4DE;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 10px solid lightblue;
  width: 600px;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 16px;
  color: #747873;
  display: block;
  margin-bottom: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: normal;
`;

const Content = styled.div`
  display: block;
  margin-bottom: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: 12px;
  color: #747873;
  padding: 15px 0;
  line-height: 1.5;
`;

const ColorPickerWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColorInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: conic-gradient(
    red, orange, yellow, green, blue, indigo, violet, red
  );
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: 50%;
  }
`;

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const [backgroundColor, setBackgroundColor] = useState(note.backgroundColor || '#ffffff');

  return (
    <NoteItemSection style={{ backgroundColor }}>
      <Heading>{note.title}</Heading>
      {typeof note.content === 'string' ? (
        <Content>{note.content}</Content>
      ) : (
        <TaskList tasks={note.content.map((taskText: string, index: number) => ({
          id: (index + 1).toString(), // Generate a unique ID for tasks
          text: taskText,
          completed: false
        }))} />
      )}
      <ColorPickerWrapper title='Change Background'>
        <ColorInput
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </ColorPickerWrapper>
    </NoteItemSection>
  );
};

export default NoteItem;
