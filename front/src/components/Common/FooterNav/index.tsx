import Link from "next/link";
import { useRouter } from "next/router";
import { Footer, FooterWrap } from "./style";

const FooterNav = () => {
  const router = useRouter();

  return (
    <>
      <footer css={Footer}>
        <ul css={FooterWrap}>
          <li className={router.asPath === "/feed" ? "active" : ""}>
            <Link href="/feed">
              <a>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 34 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6668 28.3333V18.3333H20.3335V28.3333H28.6668V15H33.6668L17.0002 0L0.333496 15H5.3335V28.3333H13.6668Z"
                    fill="#999999"
                  />
                </svg>
                <p>홈</p>
              </a>
            </Link>
          </li>

          <li className={router.asPath === "/todo" ? "active" : ""}>
            <Link href="/todo">
              <a>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3333 16.6667H1.66667C0.75 16.6667 0 17.4167 0 18.3333V28.3333C0 29.25 0.75 30 1.66667 30H28.3333C29.25 30 30 29.25 30 28.3333V18.3333C30 17.4167 29.25 16.6667 28.3333 16.6667ZM6.66667 26.6667C4.83333 26.6667 3.33333 25.1667 3.33333 23.3333C3.33333 21.5 4.83333 20 6.66667 20C8.5 20 10 21.5 10 23.3333C10 25.1667 8.5 26.6667 6.66667 26.6667ZM28.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333H28.3333C29.25 13.3333 30 12.5833 30 11.6667V1.66667C30 0.75 29.25 0 28.3333 0ZM6.66667 10C4.83333 10 3.33333 8.5 3.33333 6.66667C3.33333 4.83333 4.83333 3.33333 6.66667 3.33333C8.5 3.33333 10 4.83333 10 6.66667C10 8.5 8.5 10 6.66667 10Z"
                    fill="#999999"
                  />
                </svg>
                <p>투두</p>
              </a>
            </Link>
          </li>

          <li className={router.asPath === "/mypage" ? "active" : ""}>
            <Link href="/mypage">
              <a>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0002 0.333008C7.80016 0.333008 0.333496 7.79967 0.333496 16.9997C0.333496 26.1997 7.80016 33.6663 17.0002 33.6663C26.2002 33.6663 33.6668 26.1997 33.6668 16.9997C33.6668 7.79967 26.2002 0.333008 17.0002 0.333008ZM17.0002 5.33301C19.7668 5.33301 22.0002 7.56634 22.0002 10.333C22.0002 13.0997 19.7668 15.333 17.0002 15.333C14.2335 15.333 12.0002 13.0997 12.0002 10.333C12.0002 7.56634 14.2335 5.33301 17.0002 5.33301ZM17.0002 28.9997C12.8335 28.9997 9.15016 26.8663 7.00016 23.633C7.05016 20.3163 13.6668 18.4997 17.0002 18.4997C20.3168 18.4997 26.9502 20.3163 27.0002 23.633C24.8502 26.8663 21.1668 28.9997 17.0002 28.9997Z"
                    fill="#999999"
                  />
                </svg>
                <p>마이</p>
              </a>
            </Link>
          </li>

          <li className={router.asPath === "/setup" ? "active" : ""}>
            <Link href="/setup">
              <a>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.1133 16.2346H33.8806C33.4896 14.481 32.7901 12.8362 31.8429 11.3658L34.0678 9.1655C34.4148 8.82239 34.4148 8.26688 34.0678 7.92377L30.6533 4.54714C30.3064 4.20403 29.7446 4.20403 29.3977 4.54714L27.1728 6.7474C25.6858 5.81066 24.0281 5.11899 22.2493 4.73231V1.5354C22.2493 1.05069 21.8528 0.658569 21.3626 0.658569H16.5328C16.0426 0.658569 15.6461 1.05069 15.6461 1.5354V4.73231C13.8452 5.12444 12.1655 5.82699 10.662 6.79097L8.49768 4.65062C8.15072 4.30751 7.58898 4.30751 7.24203 4.65062L3.82754 8.02725C3.48058 8.37036 3.48058 8.92587 3.82754 9.26898L6.01391 11.4311C5.08319 12.8852 4.40029 14.5028 4.01478 16.2346H0.886667C0.396522 16.2346 0 16.6268 0 17.1115V21.8878C0 22.3725 0.396522 22.7646 0.886667 22.7646H4.01478C4.4058 24.5183 5.10522 26.163 6.05797 27.6281L3.73391 29.9263C3.38696 30.2695 3.38696 30.825 3.73391 31.1681L7.14841 34.5447C7.49536 34.8878 8.0571 34.8878 8.40406 34.5447L10.7281 32.2464C12.2151 33.1832 13.8728 33.8748 15.6516 34.2615V37.0554C15.6516 37.5401 16.0481 37.9322 16.5383 37.9322H21.3681C21.8583 37.9322 22.2548 37.5401 22.2548 37.0554V34.2615C24.0281 33.8748 25.6913 33.1832 27.1783 32.2464L29.5023 34.5447C29.8493 34.8878 30.411 34.8878 30.758 34.5447L34.1725 31.1681C34.5194 30.825 34.5194 30.2695 34.1725 29.9263L31.8484 27.6281C32.7957 26.1576 33.4951 24.5183 33.8861 22.7592H37.1188C37.609 22.7592 38.0055 22.367 38.0055 21.8823V17.106C38 16.6268 37.6035 16.2346 37.1133 16.2346ZM18.9504 27.9875C14.2087 27.9875 10.3646 24.1861 10.3646 19.4969C10.3646 14.8077 14.2087 11.0063 18.9504 11.0063C23.6922 11.0063 27.5362 14.8077 27.5362 19.4969C27.5362 24.1861 23.6922 27.9875 18.9504 27.9875Z"
                    fill="#999999"
                  />
                </svg>
                <p>설정</p>
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FooterNav;
