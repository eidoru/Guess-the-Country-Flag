import { useEffect, useState } from "react";

import PropTypes from "prop-types";

function secondsToHMS(seconds) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function Stopwatch({ handleTimeRef, className }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    handleTimeRef(time);
  }, [handleTimeRef, time]);

  return <p className={`${className}`}>{secondsToHMS(time)}</p>;
}

Stopwatch.propTypes = {
  className: PropTypes.string,
  handleTimeRef: PropTypes.func,
};

export default Stopwatch;
