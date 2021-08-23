import { CommentInput, Profile, Input, Button, InputWrap } from "./style";

//피드 댓글창
const FeedCmInput = () => {
  return (
    <div css={CommentInput}>
      <div css={Profile}>
        <img src="/images/feed/frodo.jpg" alt="프로도" />
      </div>

      <div css={InputWrap}>
        <input css={Input} type="text" placeholder="댓글달기..." />
        <button css={Button}>게시</button>
      </div>
    </div>
  );
};

export default FeedCmInput;
