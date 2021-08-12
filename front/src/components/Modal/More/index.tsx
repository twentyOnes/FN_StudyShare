import { Modal } from "./style";

type Props = { onClose?: any };

const MoreModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div css={Modal}>
      <div className="modal__wrap">
        <div className="modal__box">
          <div className="modal__more">
            <button className="back" onClick={onClose}>
              <img src="/images/common/header_back.svg" alt="취소버튼" />
              <h3>더보기</h3>
            </button>
          </div>

          <div className="modal__btn">
            <button className="subBtn" type="button">
              댓글 수정
            </button>
            <button className="subBtn delete" type="button">
              댓글 삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreModal;
