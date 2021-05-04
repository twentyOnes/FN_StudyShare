import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  padding: 0.825em 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.04);
`;

const FooterWrap = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 80%;
    .sizeMiss {
      width: 70% !important;
    }
  }
`;

const Fnb: React.FC = () => {
  return (
    <>
      <Footer>
        <FooterWrap>
          <NavLink to="/" activeClassName="active" exact>
            <img src={process.env.PUBLIC_URL + '/nav01.svg'} alt="홈피드" />
          </NavLink>
          <NavLink to="/todo" activeClassName="active" exact>
            <img src={process.env.PUBLIC_URL + '/nav02.svg'} alt="투두리스트" />
          </NavLink>
          <NavLink to="/profile" activeClassName="active" exact>
            <img src={process.env.PUBLIC_URL + '/nav03.svg'} alt="마이페이지" />
          </NavLink>
          <NavLink to="/setup" activeClassName="active" exact>
            <svg width="28" height="28" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M37.1133 16.2346H33.8806C33.4896 14.481 32.7901 12.8362 31.8429 11.3658L34.0678 9.1655C34.4148 8.82239 34.4148 8.26688 34.0678 7.92377L30.6533 4.54714C30.3064 4.20403 29.7446 4.20403 29.3977 4.54714L27.1728 6.7474C25.6858 5.81066 24.0281 5.11899 22.2493 4.73231V1.5354C22.2493 1.05069 21.8528 0.658569 21.3626 0.658569H16.5328C16.0426 0.658569 15.6461 1.05069 15.6461 1.5354V4.73231C13.8452 5.12444 12.1655 5.82699 10.662 6.79097L8.49768 4.65062C8.15072 4.30751 7.58898 4.30751 7.24203 4.65062L3.82754 8.02725C3.48058 8.37036 3.48058 8.92587 3.82754 9.26898L6.01391 11.4311C5.08319 12.8852 4.40029 14.5028 4.01478 16.2346H0.886667C0.396522 16.2346 0 16.6268 0 17.1115V21.8878C0 22.3725 0.396522 22.7646 0.886667 22.7646H4.01478C4.4058 24.5183 5.10522 26.163 6.05797 27.6281L3.73391 29.9263C3.38696 30.2695 3.38696 30.825 3.73391 31.1681L7.14841 34.5447C7.49536 34.8878 8.0571 34.8878 8.40406 34.5447L10.7281 32.2464C12.2151 33.1832 13.8728 33.8748 15.6516 34.2615V37.0554C15.6516 37.5401 16.0481 37.9322 16.5383 37.9322H21.3681C21.8583 37.9322 22.2548 37.5401 22.2548 37.0554V34.2615C24.0281 33.8748 25.6913 33.1832 27.1783 32.2464L29.5023 34.5447C29.8493 34.8878 30.411 34.8878 30.758 34.5447L34.1725 31.1681C34.5194 30.825 34.5194 30.2695 34.1725 29.9263L31.8484 27.6281C32.7957 26.1576 33.4951 24.5183 33.8861 22.7592H37.1188C37.609 22.7592 38.0055 22.367 38.0055 21.8823V17.106C38 16.6268 37.6035 16.2346 37.1133 16.2346ZM18.9504 27.9875C14.2087 27.9875 10.3646 24.1861 10.3646 19.4969C10.3646 14.8077 14.2087 11.0063 18.9504 11.0063C23.6922 11.0063 27.5362 14.8077 27.5362 19.4969C27.5362 24.1861 23.6922 27.9875 18.9504 27.9875Z"
                fill="#999999"
              />
            </svg>
          </NavLink>
        </FooterWrap>
      </Footer>
    </>
  );
};

export default Fnb;
