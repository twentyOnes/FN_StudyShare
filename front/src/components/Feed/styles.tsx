import styled from "@emotion/styled";

export const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.625em 0;
  .left {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  width: 1.875em;
  height: 1.875em;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #1b1b1b;
  border-radius: 50%;
  margin-right: 0.625em;
  span {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

export const Nickname = styled.p`
  font-size: 0.875em;
`;

export const MoreBtn = styled.button`
  img {
    width: 70%;
  }
`;
