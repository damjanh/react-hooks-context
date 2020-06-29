import React from 'react';

const Note = (props) => {
  const {title, body, removeNote} = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeNote(title)}>x</button>
    </div>
  );
};

export { Note as default };
