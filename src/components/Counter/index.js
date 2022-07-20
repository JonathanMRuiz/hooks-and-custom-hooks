import React, { useState } from "react";
import PropTypes from "prop-types";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h2>Hooks - useEffect</h2>
      <div>
        <button onClick={sumar}>Sumar</button>
        <h3>{counter}</h3>
        <button onClick={restar}>Restar</button>
      </div>
    </div>
  );
};

export default Counter;

Counter.propTypes = {};
