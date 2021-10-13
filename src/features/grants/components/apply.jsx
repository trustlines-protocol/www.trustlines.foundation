import React from "react";
import { Card } from "../../common/components/card";
import { FileText } from "../../common/components/icons/file-text";
import { LinkButton } from "../../common/components/link-button";

export const GrantApply = () => {
  return (
    <Card className="bg-gradient-to-br from-majorelle-blue to-aquamarine-green max-w-max">
      <div className="flex flex-col p-8">
        <div className="flex items-center justify-center pb-4">
          <div className="mr-2 animate-pulse stroke-current text-white">
            <FileText />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Apply for a grant!</h3>
          </div>
        </div>
        <div>
          <LinkButton
            isDark
            className="bg-rich-black hover:bg-majorelle-blue transition duration-500 ease-in-out transition-all"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSGkkafn3jDvFmv8S_FwWVoSkGXc6UGMDjTKw6Maoibcz5Jg/viewform"
          >
            Apply in Google Form →
          </LinkButton>
        </div>
      </div>
    </Card>
  );
};
