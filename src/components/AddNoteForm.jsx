import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';
import userMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const position = userMousePosition();

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      note: {
        title: title,
        body: body,
      },
    });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>
        Add Note {position.x}, {position.y}
      </p>
      <form onSubmit={addNote}>
        <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
        <button>Add Note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };
