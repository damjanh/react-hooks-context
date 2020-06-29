import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

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
      <p>The current count is {count}.</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

App.defaultProps = {
  initialCount: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App initialCount={10}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
