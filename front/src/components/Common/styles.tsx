import styled from '@emotion/styled';

export const PreNextBtn = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.78125em;
  font-weight: 300;
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;

  button {
    width: 50%;
    border-radius: 1.875em;
    a {
      display: block;
    }
  }
  .left {
    background: #c4c4c4 50%;
    margin-right: 0.5625em;
  }
  .right {
    background-color: #2656ff;
  }
`;
