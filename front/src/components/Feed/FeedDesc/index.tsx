import React from "react";
import { CommentMore, ReplayComent } from "./style";
import Commnet from "../Comment";

//피드 게시글 내용 (텍스트)
const FeedDesc = () => {
  return (
    <>
      <button type="button" css={CommentMore}>
        <span>댓글 10개</span>
      </button>

      <Commnet
        nickname="frodo"
        text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까.."
        time={10}
        like={50}
        comment={10}
      />

      <div css={ReplayComent}>
        <div className="blank"></div>
        <Commnet
          nickname="frodo"
          text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까.."
          time={10}
          like={50}
          comment={10}
          className="replayComment none"
        />
      </div>
    </>
  );
};

export default FeedDesc;
