import React, { useCallback, useState } from "react";
import YouTube from "react-youtube";

import { Button } from "../../common/components/button";
import { Play } from "../../common/components/icons/play";
import useWindowDimensions from "../../common/hooks/window";

export function MerkleDropVideo() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [player, setPlayer] = useState(null);

  const handlePlayerReady = useCallback(event => {
    setPlayer(event.target);
  }, []);

  const handlePlay = () => {
    setShowPlayer(true);
    player.playVideo();
  };

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  const { width } = useWindowDimensions();

  const adjustedWidth = width <= 1280 ? width : 1280;
  opts.width = Math.floor(adjustedWidth * 0.9);
  opts.height = Math.floor((opts.width * 9) / 16);

  return (
    <section className="bg-rich-black">
      <div className="flex flex-col items-center justify-center bg-dark-green-lighter">
        <div className="flex flex-col items-center justify-center">
          <div className={showPlayer ? "visible" : "invisible"}>
            <YouTube
              videoId="bHLYpZstZKs"
              opts={opts}
              onReady={handlePlayerReady}
            />
          </div>
          <div
            className={`absolute flex justify-center items-center ${
              showPlayer ? "invisible" : "visible"
            }`}
          >
            <Button onClick={handlePlay}>
              <Play />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
