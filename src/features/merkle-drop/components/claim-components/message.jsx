import React from "react";
import { Card } from "../../../common/components/card";

function Message(props) {
  return (
    <Card className="text-app-blue bg-app-blue-lightest text-sm rounded-sm p-4">
      <div className="flex flex-col justify-center w-full px-2">
        <div>{props.children}</div>
      </div>
    </Card>
  );
}

export default Message;
