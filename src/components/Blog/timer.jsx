import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import getRemainingTimeUntilMsTimestamp from './Utils/CountDownTimerUtils';
import BlogStyles from './styles';

export default function Timer({ countdownTimestampMs }) {
  const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
  };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);
  return (
    <BlogStyles>
      <div className="timer">
        <div className="countdown-timer">
          <span className="left">{remainingTime.days}</span>
          <span>jours</span>
          <span>{remainingTime.hours}</span>
          <span>heures</span>
          <span>{remainingTime.minutes}</span>
          <span>minutes</span>
          <span>{remainingTime.seconds}</span>
          <span className="right">secondes</span>
        </div>
      </div>
    </BlogStyles>
  );
}

Timer.propTypes = {
  countdownTimestampMs: PropTypes.string.isRequired,
};
