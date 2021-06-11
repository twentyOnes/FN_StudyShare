import styled from '@emotion/styled';

// 알림 페이지 헤더
export const AlarmHeader = styled.header`
  position: sticky;
  top: 0;
  width: 108%;
  left: 0;
  margin-left: -1.3em;
  vertical-align: middle;
  background: #ffffff;
  padding: 1em 0;
  z-index: 100;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 4%);
  padding: 1em;
`;

export const AlarmWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

// 공통 헤더
export const HeaderLayout = styled.header`
  position: sticky;
  width: 100%;
  margin-left: -1.3em;
  top: 0;
  left: 0;
  vertical-align: middle;
  background: #ffffff;
  padding: 1em;
  z-index: 100;
`;

export const HeaderWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Back = styled.button`
  vertical-align: middle;
  img {
    width: 70%;
    vertical-align: middle;
  }
`;
export const Title = styled.h1`
  vertical-align: middle;
  font-size: 1.325em;
  font-weight: 700;
  margin-left: 0.7em;
  display: inline-block;
`;

export const Logo = styled.h1`
  line-height: 0;
  img {
    width: 70%;
  }
`;
export const Buttons = styled.div`
  vertical-align: middle;
  img {
    width: 70%;
  }
  .alarm {
    margin-left: 1em;
  }
`;
