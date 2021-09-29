import React from "react";
import { Card } from "../../../common/components/card";

export default function Error({ title, children }) {
  return (
    <Card className="bg-rich-black-lighter text-off-white">
      <div className="flex-1">
        <div className="flex flex-col p-6">
          <div className="pb-2">
            <h3 className="text-neon-pink font-semibold">{title}</h3>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </Card>
  );
}
