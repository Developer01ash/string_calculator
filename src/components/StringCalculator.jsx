import React, { useState } from 'react';
import './StringCalculator.css';
import { stringCalculator } from '../utils/calculator';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const sum = stringCalculator(input);
      setResult(sum);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="calculator-container">
      <h2>String Calculator</h2>
      <textarea
        rows="5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers (use , or newline as delimiters)"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default StringCalculator;
