import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')));
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));
    if (notesData) {
      dispatch({type: 'POPULATE_NOTES', notes: notesData});
    }
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_NOTE', note: {title: title, body: body}});
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    dispatch({type: 'REMOVE_NOTE', title: title})
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote}/>
      <p>
        Add Note
      </p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}/>
        <textarea value={body} onChange={(e) => { setBody(e.target.value)}}></textarea>
        <button>Add Note</button>
      </form>
    </div>
  );
}

export { NoteApp as default };
