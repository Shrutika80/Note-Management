import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import NoteItem from './components/NoteItem';
import { Note } from './types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  align-self: start;
  max-height: 100%;
  border-radius: 12px;
  box-shadow: var(--ds-shadow-raised, 0px 1px 1px #091e4240, 0px 0px 1px #091e424f);
  margin-top: 50px;
  background: #f1f2f4;
`;

const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 70vh;
  padding-right: 10px;
  margin-top: 20px;
`;

const Heading = styled.h2`
  display: block;
  z-index: 0;
  margin: 0;
  padding: 6px 8px 6px 12px;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  overflow-wrap: anywhere;
`;

const CountCard = styled.div`
  margin: 2px 0;
  padding-left: 12px;
  color: #626f86;
  line-height: 16px;
  font-size: 12px;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const initialNotes: Note[] = [
  { id: '1', title: 'Shopping List', content: ['Eggs', 'Bread'] },
  { id: '2', title: 'Meeting Notes', content: 'Discuss project timeline and milestones.' },
  { id: '3', title: 'Workout Routine', content: ['Push-ups', 'Squats', 'Running'] },
  { id: '4', title: 'Books to Read', content: ['The Great Gatsby', '1984', 'To Kill a Mockingbird'] },
  { id: '5', title: 'Holiday Plans', content: 'Plan a trip to the mountains and book accommodation.' },
  { id: '6', title: 'Work Tasks', content: ['Finish report', 'Email clients', 'Prepare presentation'] },
  { id: '7', title: 'Grocery List', content: ['Milk', 'Cheese', 'Vegetables'] },
  { id: '8', title: 'Birthday Party', content: 'Send invitations, order cake, and decorate the venue.' },
  { id: '9', title: 'Home Maintenance', content: ['Fix the leak in the roof', 'Paint the living room'] },
  { id: '10', title: 'Learning Goals', content: ['Complete React course', 'Start learning TypeScript'] },
  { id: '11', title: 'Movie Watchlist', content: ['Inception', 'The Matrix', 'Interstellar'] },
  { id: '12', title: 'Gardening Tasks', content: ['Water the plants', 'Trim the bushes', 'Plant new seeds'] },
];

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(notes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNotes(items);
  };

  return (
    <Wrapper className="App">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="notes">
          {(provided) => (
            <InnerWrapper>
              <Heading>Notes</Heading>
              <CountCard>{notes.length} Cards</CountCard>
              <ScrollableContent {...provided.droppableProps} ref={provided.innerRef}>
                {notes.map((note, index) => (
                  <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(provided) => (
                      <NoteContainer
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ ...provided.draggableProps.style }}
                      >
                        <NoteItem note={note} />
                      </NoteContainer>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ScrollableContent>
            </InnerWrapper>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
};

export default App;
