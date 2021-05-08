import React from "react";
import { ProfileImg, ProfileWrap } from "./styles";

//프로필 사진 변경
const ProfilePhoto: React.FC = () => {
  return (
    <ProfileWrap>
      <ProfileImg>
        <svg
          width="37"
          height="37"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37" cy="37" r="37" fill="#999999" />
          <path
            d="M36.5 43.5C39.8137 43.5 42.5 40.8137 42.5 37.5C42.5 34.1863 39.8137 31.5 36.5 31.5C33.1863 31.5 30.5 34.1863 30.5 37.5C30.5 40.8137 33.1863 43.5 36.5 43.5Z"
            fill="white"
          />
          <path
            d="M30.875 18.75L27.4438 22.5H21.5C19.4375 22.5 17.75 24.1875 17.75 26.25V48.75C17.75 50.8125 19.4375 52.5 21.5 52.5H51.5C53.5625 52.5 55.25 50.8125 55.25 48.75V26.25C55.25 24.1875 53.5625 22.5 51.5 22.5H45.5562L42.125 18.75H30.875ZM36.5 46.875C31.325 46.875 27.125 42.675 27.125 37.5C27.125 32.325 31.325 28.125 36.5 28.125C41.675 28.125 45.875 32.325 45.875 37.5C45.875 42.675 41.675 46.875 36.5 46.875Z"
            fill="white"
          />
        </svg>
      </ProfileImg>
    </ProfileWrap>
  );
};

export default ProfilePhoto;
