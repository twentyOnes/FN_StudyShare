import Header from "components/Common/Header";
import FooterNav from "components/Common/FooterNav";
import { WriteWrap, PhotoAddBtn, PhotoAdd, TextAdd } from "./style";
import SliderImg from "components/Feed/SliderImg";

const Write = () => {
  return (
    <>
      <Header />
      <main css={WriteWrap}>
        <SliderImg />
        <section css={TextAdd}>
          <h3>feed text</h3>
          <textarea placeholder="내용을 입력해 주세요." />
        </section>
      </main>
      <FooterNav />
    </>
  );
};

export default Write;
