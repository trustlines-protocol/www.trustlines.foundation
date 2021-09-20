import React, { useState } from "react";
import YouTube from "react-youtube";

import { Button } from "../../common/components/button";
import { Play } from "../../common/components/icons/play";

export function MerkleDropVideo() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <section className="bg-rich-black">
      <div className="flex flex-col items-center justify-center bg-dark-green-lighter">
        <div className="flex flex-col items-center justify-center video-container">
          {play ? (
            <div>
              <YouTube videoId="bHLYpZstZKs" opts={opts} />
              {/* <iframe
                id="player"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bHLYpZstZKs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
            </div>
          ) : (
            <div>
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
