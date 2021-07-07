import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";

const FollowButton = styled.button`
  width: 5em;
  height: 2.7em;
  display: flex;
  img {
    width: 100%;
  }
`;

//마이페이지 팔로우 팔로잉 버튼
const FollowBtn: React.FC = () => {
  const [follow, setFollow] = useState(false);

  const onToggleFollow = useCallback(() => {
    setFollow((prev) => !prev);
  }, []);

  return (
    <>
      {follow ? (
        <FollowButton>
          <img
            src={process.env.PUBLIC_URL + "/images/follow.svg"}
            alt="팔로우버튼"
            onClick={onToggleFollow}
          />
        </FollowButton>
      ) : (
        <FollowButton>
          <img
            src={process.env.PUBLIC_URL + "/images/following.svg"}
            alt="팔로잉버튼"
            onClick={onToggleFollow}
          />
        </FollowButton>
      )}
    </>
  );
};

export default FollowBtn;
