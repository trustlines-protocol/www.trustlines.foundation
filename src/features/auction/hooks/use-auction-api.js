import React from "react";

export default function useAuctionAPI() {
  const [isFetching, setIsFetching] = React.useState(false);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    setIsFetching(true);

    fetch(process.env.AUCTION_API_URL)
      .then(async result => {
        const json = await result.json();
        setResult(json);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return [result, isFetching];
}
