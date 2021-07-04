import React from "react";

import styled from "@emotion/styled";

import Header from "../../components/Header";
import Fnb from "../../components/Fnb";
import FeedContent from "../../components/Feed/FeedContent";
import FeedGoal from "../../components/Feed/FeedGoal";
import FeedWriteBtn from "../../components/Feed/FeedWriteBtn";

const FeedLayout = styled.section`
  margin-bottom: 10vh;
`;

const Feed: React.FC = () => {
  return (
    <div>
      <Header />
      <FeedGoal nickname="이현주" />
      <FeedLayout>
        <FeedContent />
        <FeedContent />
      </FeedLayout>
      <Fnb />
      <FeedWriteBtn />
    </div>
  );
};

export default Feed;
