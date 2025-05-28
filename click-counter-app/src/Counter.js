import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const MAX_LIMIT = 10;

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === MAX_LIMIT) {
      setMessage("🎉 You've reached the limit!");
    } else {
      setMessage('');
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);

      if (newCount < MAX_LIMIT) {
        setMessage('');
      }
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Click Counter App</h1>
      <p style={styles.count}>Count: {count}</p>

      {message && <p style={styles.message}>{message}</p>}

      <div style={styles.buttonGroup}>
        <button onClick={handleIncrease} style={styles.button}>Increase</button>
        <button onClick={handleDecrease} style={styles.button} disabled={count === 0}>Decrease</button>
        <button onClick={handleReset} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
  count: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '1rem 0',
  },
  message: {
    color: 'red',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  resetButton: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#f44336',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Counter;
