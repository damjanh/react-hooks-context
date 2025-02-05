import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return notes.map((note) => (
    <Note key={note.title} title={note.title} body={note.body} />
  ));
};

export { NoteList as default };
