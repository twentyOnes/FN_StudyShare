import Header from "components/Common/Header";
import FooterNav from "components/Common/FooterNav";
import Link from "next/link";
import { Setting } from "./style";

const Setup = () => {
  return (
    <>
      <Header />
      <ul css={Setting}>
        <li>
          <Link href="/profile">
            <a>
              프로필 수정하기<span>&gt;</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              로그아웃<span>&gt;</span>
            </a>
          </Link>
        </li>
      </ul>
      <FooterNav />
    </>
  );
};

export default Setup;
