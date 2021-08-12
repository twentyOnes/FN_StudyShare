import { alarm, profile } from "../style";

type Props = {
  date: any;
  nickname: string;
};

export const AlarmFollow = ({ date, nickname }: Props) => {
  return (
    <button css={alarm} type="button">
      <h2 css={profile}>
        <img src="/images/alarm/peach.jpg" alt="프로필 사진" />
      </h2>

      <section>
        <h4>{nickname}님이 나를 팔로우 합니다.</h4>
        <span>{date}</span>
      </section>
    </button>
  );
};
