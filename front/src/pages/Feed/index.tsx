import React from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import Fnb from '../../components/Fnb';
import FeedContent from '../../components/Feed/FeedContent';

const FeedLayout = styled.section`
  margin-bottom: 10vh;
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
