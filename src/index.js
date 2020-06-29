import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'));

  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      { title, body }
    ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    setNotes(
      notes.filter((note) => note.title !== title)
    );
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
          <div key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => removeNote(note.title)}>x</button>
          </div>
        )
      )}
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

// const App = ({initialCount, initialText}) => {
//   const [count, setCount] = useState(initialCount);
//   const [text, setText] = useState(initialText);

//   useEffect(() => {
//     document.title = count;
//   });

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count -1);
//   }

//   const reset = () => {
//     setCount(initialCount);
//   };

//   return (
//     <div>
//       <p>The current {text} is {count}.</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input type="text" value={text} onChange={(e)=> setText(e.target.value)}></input>
//     </div>
//   );
// }

// App.defaultProps = {
//   initialCount: 0,
//   initialText: 'count',
// };

ReactDOM.render(
  <React.StrictMode>
    <NoteApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
