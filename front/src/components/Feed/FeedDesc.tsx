import React from "react";
import { Text, CommentMore, ReplayComent } from "./styles";

import FeedComent from "./FeedComment";

type Props = {
  text: string;
};

//피드 게시글 내용 (텍스트)
const FeedDesc: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Text>
        <span className="text-width">{text}</span>
        <span>
          <button type="button">더보기</button>
        </span>
      </Text>

      <CommentMore type="button">
        <span>댓글 10개</span>
      </CommentMore>

      <FeedComent
        nickname="frodo"
        text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까.."
        time={10}
        like={50}
        comment={10}
      />

      <ReplayComent>
        <div className="blank"></div>
        <FeedComent
          nickname="frodo"
          text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까.."
          time={10}
          like={50}
          comment={10}
          className="replayComment none"
        />
      </ReplayComent>
    </>
  );
};

export default FeedDesc;
