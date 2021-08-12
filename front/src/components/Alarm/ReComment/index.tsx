import { alarm, Icon } from "../style";

type Props = {
  date: any;
  nickname: string;
  text: string;
};

export const AlarmReComment = ({ date, nickname, text }: Props) => {
  return (
    <button css={alarm} type="button">
      <h2 css={Icon}>
        <img src="/images/alarm/alarm_comment.svg" alt="대댓글" />
      </h2>

      <section>
        <h4>{nickname}님이 내 댓글에 단 답글</h4>
        <p>{text}</p>
        <span>{date}</span>
      </section>
    </button>
  );
};
