import React, { useState } from 'react';

const Counter = (props) => {
  const [remaining, setRemaining] = useState(
    new Date(props.endAt).getTime() - Date.now() > 0 ? new Date(props.endAt).getTime() - Date.now() : 0
  );
  let interval;

  if (interval) clearTimeout(interval);

  interval = setTimeout(() => {
    const newTiming = remaining - 1000;

    setRemaining(newTiming > 0 ? newTiming : 0);
  }, 1000);

  return (
    <>
      <p>Temps restant : {Math.floor(remaining / 1000)}s</p>
    </>
  );
};

export default Counter;
