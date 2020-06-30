import { useState, useEffect } from 'react';

const useMousePosition = () => {
const [position, setPosition] = useState({x: 0, y: 0});

useEffect(() => {
  const ref = document.addEventListener('mousemove', (e) => {
    setPosition({x: e.pageX, y: e.pageY});
  });

  return () => {
    document.removeEventListener('mousemove', ref);
  };
}, []);

return position;
}

export { useMousePosition as default};
