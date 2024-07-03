import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import NoteItem from './NoteItem';
import { Note } from '../types';
import styled from 'styled-components';

const NoteListWrapper = styled.div``;

const NoteSection = styled.div``;

interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <NoteSection>
      {notes.map((note, index) => (
        <Draggable key={note.id} draggableId={note.id} index={index}>
          {(provided) => (
            <NoteListWrapper
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <NoteItem note={note} />
            </NoteListWrapper>
          )}
        </Draggable>
      ))}
    </NoteSection>
  );
};

export default NoteList;
