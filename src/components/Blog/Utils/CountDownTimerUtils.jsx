import dayjs from 'dayjs';

export default function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return '0'.repeat(minLength - numberString.length) + numberString;
  }

  function getRemainingSeconds() {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
  }

  function getRemainingMinutes() {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
  }

  function getRemainingHours() {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
  }

  function getRemainingDays() {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days.toString();
  }

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
      months: '00',
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}
