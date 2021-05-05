import React from "react";
import FeedHead from "./FeedHead";
import FeedSlider from "./FeedSlider";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FeedContent = () => {
  return (
    <div>
      <FeedHead id="leehyunju" />
      <FeedSlider />
    </div>
  );
};

export default FeedContent;
