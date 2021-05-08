import styled from "@emotion/styled";

//마이페이지 나의 정보 전체보기
export const MyInfoBox = styled.div`
  display: grid;
  padding: 1.5em 0.5em 2.8em 0.5em;
  border-bottom: 1px solid #c5c5c5;
  grid-template-columns: 1fr 4fr 2fr;
`;

export const ProfileWrap = styled.div``;
export const MyInfoText = styled.div`
  .name {
    h1 {
      font-size: 1em;
      display: inline-block;
      margin-right: 0.5em;
      margin-top: 0.3em;
    }
    span {
      font-size: 0.75em;
      color: #999999;
    }
  }
  .confirm {
    font-size: 0.75em;
    color: #000000;
    margin: 0.8em 0;
  }
  .follow {
    span {
      font-size: 0.75em;
      color: #000000;
      margin-right: 0.5em;
    }
  }
  .myself {
    color: #2656ff;
    margin: 0.8em 0;
    font-size: 0.75em;
  }
`;

//프로필 이미지 설정하기
export const ProfileImg = styled.button`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background-color: #e4e4e4;
  position: relative;
  padding: 1.25em 0;
  margin-right: 1.1875em;
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

//스터디 목록 카드 Wrapper
export const StudyListWrap = styled.section`
  padding: 1.5em;
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  margin-bottom: 7vh;
`;

//스터디 목록 카드
export const Card = styled.div`
  width: 100%;
  height: 11em;
  border-radius: 10px;
  margin-bottom: 1.3em;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../images/sky.jpg");
  div {
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 0.375em 0.875em;
    h4 {
      font-size: 0.7em;
    }
    p {
      font-size: 0.6em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 30vw;
    }
    span {
      font-size: 0.6em;
    }
    .like {
      svg {
        vertical-align: middle;
        margin-right: 0.25em;
      }
      span {
        vertical-align: middle;
      }
    }
  }
`;
