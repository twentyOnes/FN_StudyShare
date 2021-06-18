import React from "react";
import { MyInfoText } from "./styles";

type Props = {
  name: string;
  birth?: number;
  study: number;
  follower: number;
  following: number;
  introduction: string;
};

//마이페이지 이름/팔로우,팔로잉수/자기소개
const MyProfileInfo: React.FC<Props> = ({
  name,
  birth,
  study,
  follower,
  following,
  introduction,
}: Props) => {
  return (
    <MyInfoText>
      <div className="name">
        <h1>{name}</h1>
        <span>{birth}</span>
      </div>

      <p className="confirm">공부인증 {study}회</p>

      <div className="follow">
        <span>Follower {follower}</span>
        <span>/</span>
        <span>Following {following}</span>
      </div>
      <p className="myself">{introduction}</p>
    </MyInfoText>
  );
};

export default MyProfileInfo;
