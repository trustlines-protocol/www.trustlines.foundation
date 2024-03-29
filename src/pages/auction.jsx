import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { AuctionHero } from "../features/auction/components/hero";
import { Chart } from "../features/auction/components/chart";
import { ChartLegend } from "../features/auction/components/chart-legend";
import { AuctionWithdraw } from "../features/auction/components/withdraw";

import ChartState from "../features/auction/api/chartState";
import useAuctionAPI from "../features/auction/hooks/use-auction-api";

const chartState = new ChartState();

export default function Auction() {
  const [auctionAPIResult, isFetching] = useAuctionAPI();

  React.useEffect(() => {
    if (auctionAPIResult) {
      chartState.mergeRestResult(auctionAPIResult);
    }
  }, [auctionAPIResult]);

  return (
    <Layout>
      <SEO title="Validator Auction - Trustlines Foundation" keywords={["validator auction"]} />
      <AuctionHero />
      <ChartLegend chartState={chartState} />
      <Chart chartState={chartState} />
      <AuctionWithdraw />
    </Layout>
  );
}
