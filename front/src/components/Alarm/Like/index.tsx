import { alarm, Icon } from "../style";

type Props = {
  date: any;
  nickname: string;
};

export const AlarmLike = ({ date, nickname }: Props) => {
  return (
    <button css={alarm} type="button">
      <h2 css={Icon}>
        <img src="/images/alarm/alarm_colorLike.svg" alt="좋아요" />
      </h2>

      <section>
        <h4>{nickname}님이 내 게시물을 좋아합니다.</h4>
        <span>{date}</span>
      </section>
    </button>
  );
};
