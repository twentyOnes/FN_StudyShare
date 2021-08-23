import Header from "components/Common/Header";
import FooterNav from "components/Common/FooterNav";
import {
  ProfileImg,
  ProfileWrap,
  InputWrap,
  ProfileWrapPadding,
} from "./style";

const Profile = () => {
  return (
    <>
      <Header />

      <div css={ProfileWrapPadding}>
        <div css={ProfileWrap}>
          <button css={ProfileImg}>
            <img src="/images/common/btn_photo.svg" alt="" />
          </button>
        </div>

        <form css={InputWrap}>
          <div>
            <label>이름</label>
            <input
              type="text"
              placeholder="5글자 이내로 작성해주세요."
              maxLength={5}
            />
          </div>

          <div>
            <label>생년월일</label>
            <input type="number" placeholder="예시) 970521" maxLength={6} />
          </div>

          <div>
            <label>인증 이메일</label>
            <input type="email" placeholder="예시) abc@studyshare.com" />
          </div>

          <div className="separation">
            <label>자기 소개</label>
            <textarea
              placeholder="40글자 이내로 간단하게 작성해주세요."
              maxLength={40}
            />
          </div>

          <button type="button">비밀번호 변경하기 &gt;</button>
        </form>
      </div>

      <FooterNav />
    </>
  );
};

export default Profile;
