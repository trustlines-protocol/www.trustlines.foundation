import React from "react";

export function Status({ status, remainingSeconds, secondsBeforeStart }) {
  const [timeString, label] = getTimeStringAndLabel({
    status,
    remainingSeconds,
    secondsBeforeStart,
  });

  return (
    <div className="bg-aquamarine-green-light text-dark-green rounded-full py-2 px-4 mx-14">
      {timeString && <div>{timeString}</div>}
      {label && <div>{label}</div>}
    </div>
  );
}

function getTimeStringAndLabel({
  status,
  remainingSeconds,
  secondsBeforeStart,
}) {
  let timeString = status;
  let label;
  if (timeString === "Started") {
    timeString = formatSecondsToString(remainingSeconds);
    label = "Remaining Time";
  } else if (timeString === "Not Started" && secondsBeforeStart > 0) {
    timeString = formatSecondsToString(secondsBeforeStart);
    label = "Until Auction starts";
  }

  return [timeString, label];
}

function formatSecondsToString(seconds) {
  if (!seconds) {
    return undefined;
  }
  const s = seconds % 60;
  const m = Math.floor((seconds % 3600) / 60);
  const h = Math.floor((seconds % 86400) / 3600);
  const d = Math.floor(seconds / 86400);
  return `${d}d ${h}h ${m}m ${s}s`;
}
