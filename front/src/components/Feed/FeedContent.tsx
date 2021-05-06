import React from 'react';
import FeedHead from './FeedHead';
import FeedSlider from './FeedSlider';
import { Feed } from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FeedContent = () => {
  return (
    <Feed>
      <FeedHead nickname="@singformina" />
      <FeedSlider />
    </Feed>
  );
};

export default FeedContent;
