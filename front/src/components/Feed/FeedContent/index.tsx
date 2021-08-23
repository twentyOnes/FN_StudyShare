import { css } from "@emotion/react";
import FeedBoxHead from "../FeedBoxHead";
import CommentHead from "../CommentHead";
import FeedDesc from "../FeedDesc";
import FeedBoxInput from "../FeedBoxInput";
import { Carousel } from "antd";

// 하나의 피드 게시글
const FeedContent: React.FC = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <article css={Feed}>
      <FeedBoxHead nickname="apeach" />

      <Carousel>
        <div>
          <img
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="/images/feed/slider01.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </Carousel>

      <CommentHead
        like={1000}
        time={50}
        text="내일부터 시월 십칠일까지 고1 쎈 끝낼수 있을까 무조건 해야된다"
      />
      <FeedDesc />

      <FeedBoxInput />
    </article>
  );
};

export default FeedContent;

const Feed = css`
  padding: 0.6em 1.5625em;
  margin-top: 3em;
`;
