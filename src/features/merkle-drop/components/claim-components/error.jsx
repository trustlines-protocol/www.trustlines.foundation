import React from "react";
import RetryButton from "./retry-button";
import { Card } from "../../../common/components/card";

function Error({ errorMessage, reset }) {
  return (
    <div className="flex flex-col py-2">
      <div>
        <Card className="text-app-blue bg-app-blue-lightest text-sm rounded-sm p-4">
          <div className="flex flex-col justify-center w-full px-2">
            <div>
              <h3 className="font-semibold pb-2">
                Oops, something went wrong!
              </h3>
            </div>
            <div className="has-text-grey has-text-centered">
              {errorMessage}
            </div>
          </div>
        </Card>
      </div>
      <div className="pt-2">
        <RetryButton reset={reset} />
      </div>
    </div>
  );
}

export default Error;
