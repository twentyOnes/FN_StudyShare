import React from 'react';
import { CommentInput, Profile, Input, Button, InputWrap } from './styles';

// 피드 댓글창
// eslint-disable-next-line
const FeedCmInput = () => {
  return (
    <CommentInput>
      <Profile>
        <img src={process.env.PUBLIC_URL + '/images/rupy.png'} alt="프로도" />
      </Profile>

      <InputWrap>
        <Input type="text" placeholder="댓글달기..." />
        <Button>게시</Button>
      </InputWrap>
    </CommentInput>
  );
};

export default FeedCmInput;
