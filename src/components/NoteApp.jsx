import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NotesContext from '../context/notes-context';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
  const [ notes, dispatch ] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')));
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    if (notesData) {
      dispatch({
        type: 'POPULATE_NOTES',
        notes: notesData,
      });
    }
  }, []);

  return (
    <NotesContext.Provider value={{notes: notes, dispatch: dispatch}}>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
}

export { NoteApp as default };
