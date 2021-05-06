import styled from '@emotion/styled';

export const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.625em 0;
  .left {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  width: 2.3em;
  height: 2.3em;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 0.625em;
  overflow: hidden;
  border: 0 solid #000;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Nickname = styled.p`
  font-size: 0.85em;
  font-weight: 600;
`;

export const MoreBtn = styled.button`
  img {
    width: 70%;
  }
`;

// Feed 스크롤
export const Feed = styled.div`
  overflow-y: scroll;
  height: 100vh;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Feed 슬라이드 이미지 사이즈
export const FeedImg = styled.div`
  width: 100%;
  .slick-slider {
    width: 100%;
  }
  .slick-list {
    width: 100%;
    div {
      height: 50vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .slick-dots li.slick-active button:before {
    color: #2656ff !important;
    opacity: 1 !important;
  }
  .slick-dots li {
    margin: 0 !important;
  }
  .slick-arrow {
    z-index: 100;
  }
  .slick-prev {
    left: 12px;
    &:before {
      opacity: 0.6;
      color: #fff;
      font-size: 28px;
    }
  }

  .slick-next {
    right: 19px;
    &:before {
      opacity: 0.6;
      color: #fff;
      font-size: 28px;
    }
  }
`;
