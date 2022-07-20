import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import PropTypes from "prop-types";

const ClockHook = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  console.log(hour);

  return (
    <div>
      <h2>Reloj con Hooks</h2>
      {!visible && <Clock hour={hour} />}
      <button>Iniciar reloj</button>
      <button>Detener reloj</button>
    </div>
  );
};

export default ClockHook;

ClockHook.propTypes = {
  hour: PropTypes.number,
};
