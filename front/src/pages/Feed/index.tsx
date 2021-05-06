import React from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import Fnb from '../../components/Fnb';
import FeedContent from '../../components/Feed/FeedContent';

const FeedLayout = styled.section`
  overflow-y: scroll;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Feed: React.FC = () => {
  return (
    <div>
      <Header />
      <FeedLayout>
        <FeedContent />
        <FeedContent />
      </FeedLayout>
      <Fnb />
    </div>
  );
};

export default Feed;
