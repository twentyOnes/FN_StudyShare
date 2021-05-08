import React from "react";
import { MyInfoBox, StudyListWrap } from "./styles";
import ProfilePhoto from "./ProfilePhoto";
import ProfileInfo from "./ProfileInfo";
import FollowBtn from "./FollowBtn";
import StudyList from "./StudyList";

//마이페이지 정보
const MyInfo: React.FC = () => {
  return (
    <>
      <MyInfoBox>
        <ProfilePhoto />
        <ProfileInfo
          name="이현주"
          birth={19970521}
          study={10}
          follower={5}
          following={10}
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
