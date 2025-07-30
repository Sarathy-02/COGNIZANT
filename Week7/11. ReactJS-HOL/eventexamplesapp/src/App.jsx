import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

const App = () => {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  // Function that takes arguments
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic Event Handler
  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Handling Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <hr />

      <button onClick={onPress}>OnPress</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
};

export default App;
