import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = (props) => {
  const dispatch = useContext(NotesContext);
  const {title, body} = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: title})}>x</button>
    </div>
  );
};

export { Note as default };
