import React from "react";
import moment from "moment";

function getPluralOutput(duration, name) {
  return duration > 0 && duration < 2
    ? `${duration} ${name}`
    : `${duration} ${name}s`;
}

function CountdownClock({ countdownDuration, initDateTime }) {
  const initMoment = moment(initDateTime);
  const currentDuration = moment(countdownDuration);
  const duration = moment.duration(currentDuration.diff(initMoment));
  // Get initial values
  let w = duration.weeks();
  let d = duration.days();
  let h = duration.hours();
  let m = duration.minutes();
  let s = duration.seconds();

  // Set display values
  w = getPluralOutput(w, "week");
  d = getPluralOutput(d, "day");
  h = getPluralOutput(h, "hour");
  m = getPluralOutput(m, "minute");
  s = getPluralOutput(s, "second");

  return <h3>{`${w} ${d} ${h} ${m} ${s}`}</h3>;
}

export default CountdownClock;
