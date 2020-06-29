import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [...state, {title: action.note.title, body: action.note.body}];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title);
    default:
      return state;
  }
};

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
      {notes.map((note) => (
          <Note key={note.title} title={note.title} body={note.body} removeNote={removeNote}/>
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

const Note = (props) => {
  const {title, body, removeNote} = props;
  useEffect(() => {
    console.log('Setting up effect!');
    return () => {
      console.log('Cleaning up effect!');
    };
  }, []);
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeNote(title)}>x</button>
    </div>
  );
}

// const App = ({initialCount, initialText}) => {
//   const [count, setCount] = useState(initialCount);
//   const [text, setText] = useState(initialText);

//   useEffect(() => {
//     console.log('This should only run once.');
//   }, []);

//   useEffect(() => {
//     document.title = count;
//   }, [count]);

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
