import React, { useState, useCallback } from "react";

import { Head, Profile, Nickname, MoreBtn } from "./style";
import More from "../../Modal/More";

type Props = {
  nickname: string;
};

//피드 글 작성자
const FeedBoxHead = ({ nickname }: Props) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleModal = useCallback(() => {
    setIsShowing((prevState) => !prevState);
  }, []);

  return (
    <header css={Head}>
      <div className="left">
        <div css={Profile}>
          <img src="/images/feed/peach.jpg" alt="어피치" />
        </div>
        <p css={Nickname}>@{nickname}</p>
      </div>

      <button type="button" onClick={toggleModal} css={MoreBtn}>
        <img src="/images/feed/btn_more.svg" alt="더보기" />
      </button>

      {isShowing && <More onClose={toggleModal} />}
    </header>
  );
};

export default FeedBoxHead;
