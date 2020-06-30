import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const Note = (props) => {
  const { dispatch } = useContext(NotesContext);
  const { title, body } = props;
  const position = useMousePosition();

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{position.x}, {position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: title, })}>x</button>
    </>
  );
};

export { Note as default };
