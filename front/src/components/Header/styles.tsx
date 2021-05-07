import styled from '@emotion/styled';

// 공통 헤더
export const AlarmHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  vertical-align: middle;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1em;
`;

export const AlarmWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
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

// 알림 페이지 헤더
export const HeaderLayout = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.9375em 0;
  line-height: 0;
`;
export const Logo = styled.h1`
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
