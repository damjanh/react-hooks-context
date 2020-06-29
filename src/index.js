import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = ({initialCount, initialText}) => {
  const [count, setCount] = useState(initialCount);
  const [text, setText] = useState(initialText);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count -1);
  }

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <p>The current {text} is {count}.</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)}></input>
    </div>
  );
}

App.defaultProps = {
  initialCount: 0,
  initialText: 'count',
};

ReactDOM.render(
  <React.StrictMode>
    <App initialCount={10}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
