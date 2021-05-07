import styled from '@emotion/styled';

export const AlarmBox = styled.section`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  padding-top: 11vh;
`;

export const Profile = styled.p`
  width: 38.06px;
  height: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  margin-right: 1em;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Alarm = styled.a`
  display: inline-flex;
  width: 100%;
  padding: 0.6em 0;
  section {
    width: 100%;
    h4 {
      font-size: 0.8em;
      color: #000;
    }
    p {
      font-size: 0.7em;
      line-height: 1.25;
      color: #000;
      margin-top: 0.5em;
    }
    span {
      font-size: 0.7em;
      color: #c4c4c4;
    }
  }
`;

export const Icon = styled.div`
  width: 39.06px;
  height: 30px;
  overflow: hidden;
  margin-top: 0.3em;
  margin-right: 1em;
  img {
    width: 70%;
  }
`;
