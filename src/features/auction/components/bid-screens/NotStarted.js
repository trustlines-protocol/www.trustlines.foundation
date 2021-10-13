import React from "react";
import Error from "../bid-components/Error";
import moment from "moment-timezone";

const DATE_FORMAT = "MMM D, YYYY, h:mm:ss a";

export default function NotStarted() {
  const timestamp = process.env.AUCTION_START_TIMESTAMP;
  return (
    <Error title="Auction has not started">
      Please be a little more patient, the auction has not started yet. <br />
      The auction will start on{" "}
      {moment
        .unix(timestamp)
        .tz("UTC")
        .format(DATE_FORMAT)}{" "}
      UTC ({moment.unix(timestamp).format(DATE_FORMAT)} {moment.tz.guess()})
    </Error>
  );
}
