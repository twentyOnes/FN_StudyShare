import React from "react";
import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import FeedContent from "../../components/Feed/FeedContent";

const Feed: React.FC = () => {
  return (
    <div>
      <Header />
      <FeedContent />
      <Fnb />
    </div>
  );
};

export default Feed;
