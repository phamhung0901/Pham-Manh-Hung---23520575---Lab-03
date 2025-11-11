import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  function handleIncrease() {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 10) setMessage('Reached 10!');
    else setMessage('');
  }

  function handleDecrease() {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setMessage('');
    } else {
      setMessage('Cannot decrease below 0');
    }
  }

  return (
    <div aria-label="Counter component" style={{ textAlign: 'center' }}>
      <p>Count: {count}</p>
      <button onClick={handleDecrease} style={{ marginRight: 8 }}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
      {message && <p style={{ color: '#06b6d4', fontWeight: 600 }}>{message}</p>}
    </div>
  );
}

export default Counter;
