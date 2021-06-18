import React from "react";
import { Head, Profile, Nickname, MoreBtn } from "./styles";

type Props = {
  nickname?: string;
};

//피드 글 작성자
const FeedHead: React.FC<Props> = ({ nickname }: Props) => {
  return (
    <div>
      <Head>
        <div className="left">
          <Profile>
            <img
              src={process.env.PUBLIC_URL + "/images/peach.jpg"}
              alt="어피치"
            />
          </Profile>
          <Nickname>@{nickname}</Nickname>
        </div>

        <MoreBtn>
          <img
            src={process.env.PUBLIC_URL + "/images/btn_more.svg"}
            alt="더보기"
          />
        </MoreBtn>
      </Head>
    </div>
  );
};

export default FeedHead;
