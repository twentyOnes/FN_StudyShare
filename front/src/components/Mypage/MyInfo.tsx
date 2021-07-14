import React from "react";
import { MyInfoBox, StudyListWrap } from "./styles";

import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import FollowBtn from "./FollowBtn";
import StudyList from "./StudyList";

import { useSelector } from "react-redux";

//마이페이지 정보
const MyInfo: React.FC = () => {
  // eslint-disable-next-line
  const me = useSelector((state: any) => state.user);

  return (
    <>
      <MyInfoBox>
        <ProfilePhoto />
        <ProfileInfo
          name={me.nickname}
          birth={20170502}
          study={10}
          follower={me.Followers?.length || 0}
          following={me.Followings?.length || 0}
          introduction="안녕하세요 맞팔해요!!"
        />
        <FollowBtn />
      </MyInfoBox>

      <StudyListWrap>
        <StudyList
          date={20201010}
          text="오늘은 알고리즘 공부를 꼭 끝낼 것이다."
          like={30}
        />
      </StudyListWrap>
    </>
  );
};

export default MyInfo;
