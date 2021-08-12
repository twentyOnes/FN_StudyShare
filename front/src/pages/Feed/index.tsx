import Header from "components/Common/Header";
import FooterNav from "components/Common/FooterNav";
import { FeedWrap } from "./style";
import HelloGoal from "components/Feed/Hello/Goal";
import WriteButton from "components/Feed/WriteButton";

const Feed = () => {
  return (
    <>
      <Header />
      <main css={FeedWrap}>
        <HelloGoal user="이현주" />
        <WriteButton />
      </main>
      <FooterNav />
    </>
  );
};

export default Feed;
