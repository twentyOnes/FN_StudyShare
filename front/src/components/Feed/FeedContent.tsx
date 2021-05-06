import React from 'react';
import FeedHead from './FeedHead';
import FeedSlider from './FeedSlider';
import FeedCmHead from './FeedCmHead';
import FeedDesc from './FeedDesc';
import { Feed } from './styles';

// 피드 게시글

const FeedContent: React.FC = () => {
  return (
    <Feed>
      <FeedHead nickname="apeach" />
      <FeedSlider />
      <FeedCmHead like={1000} time={50} />
      <FeedDesc text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까 무조건 해야된다 진짜 갓생살자" />
    </Feed>
  );
};

export default FeedContent;
