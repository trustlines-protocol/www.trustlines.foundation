import React from "react";
import { Button } from "../../../common/components/button";

function RetryButton(props) {
  const classNames =
    props.className ||
    "px-8 py-4 bg-majorelle-blue hover:bg-majorelle-blue-lighter hover:text-off-white";

  return (
    <div>
      <div>
        <Button
          isDark
          onClick={props.reset}
          className={classNames}
          label="Enter different address"
        />
      </div>
    </div>
  );
}

export default RetryButton;
