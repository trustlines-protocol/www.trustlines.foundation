import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

import { Button } from "../../common/components/button";
import { Play } from "../../common/components/icons/play";
import useWindowDimensions from "../../common/hooks/window";

export function MerkleDropVideo() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
    },
  };
  const { width } = useWindowDimensions();

  const adjustedWidth = width <= 1280 ? width : 1280;
  opts.width = Math.floor(adjustedWidth * 0.9);
  opts.height = Math.floor((opts.width * 9) / 16);

  return (
    <section className="bg-rich-black">
      <div className="flex flex-col items-center justify-center bg-dark-green-lighter">
        <div className="flex flex-col items-center justify-center min-w-max">
          {play ? (
            <div>
              <YouTube videoId="bHLYpZstZKs" opts={opts} />
            </div>
          ) : (
            <div className="flex justify-center items-center video-container">
              <Button onClick={handlePlay}>
                <Play />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
