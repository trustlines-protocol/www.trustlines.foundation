import React from "react";
import { Card } from "../../common/components/card";
import { FileText } from "../../common/components/icons/file-text";
import { LinkButton } from "../../common/components/link-button";

export const GrantApply = () => {
  return (
    <Card className="bg-rich-black bg-opacity-20 max-w-max">
      <div className="flex flex-col p-8">
        <div className="flex items-center justify-center pb-4">
          <div className="mr-2 animate-pulse stroke-current text-grey">
            <FileText />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-grey">Apply for a grant!</h3>
          </div>
        </div>
        <div>
          <LinkButton
            isDark
            className="bg-aquamarine-green hover:bg-majorelle-blue transition duration-500 ease-in-out transition-all font-semibold"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSGkkafn3jDvFmv8S_FwWVoSkGXc6UGMDjTKw6Maoibcz5Jg/viewform"
          >
            Fill an Application Form →
          </LinkButton>
        </div>
      </div>
    </Card>
  );
};
