import React, { useState, useCallback } from "react";

import { Head, Profile, Nickname, MoreBtn } from "./styles";
import More from "../Modal/More";

type Props = {
  nickname?: string;
};

//피드 글 작성자
const FeedHead: React.FC<Props> = ({ nickname }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShowing((prevState) => !prevState);
  }, []);

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

        <MoreBtn type="button" onClick={toggleModal}>
          <img
            src={process.env.PUBLIC_URL + "/images/btn_more.svg"}
            alt="더보기"
          />
        </MoreBtn>

        {isShowing && <More onClose={toggleModal} />}
      </Head>
    </div>
  );
};

export default FeedHead;
