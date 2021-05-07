import React from 'react';
import { AlarmBox, Alarm, Profile, Icon } from './styles';

type Props = {
  date: number;
  nickname: string;
  text: string;
};

// eslint-disable-next-line
const AlarmList = ({ date, nickname, text }: Props) => {
  return (
    <AlarmBox>
      <Alarm className="like">
        <Icon>
          <img src={process.env.PUBLIC_URL + '/images/alarm_colorLike.svg'} alt="좋아요" />
        </Icon>
        <section>
          <h4>{nickname}님이 내 게시물을 좋아합니다.</h4>
          <span>{date}</span>
        </section>
      </Alarm>

      <Alarm className="follow">
        <Profile>
          <img src={process.env.PUBLIC_URL + '/images/peach.jpg'} alt="팔로우" />
        </Profile>
        <section>
          <h4>{nickname}님이 나를 팔로우 합니다.</h4>
          <span>{date}</span>
        </section>
      </Alarm>

      <Alarm className="comment">
        <Icon>
          <img src={process.env.PUBLIC_URL + '/images/alarm_comment.svg'} alt="댓글" />
        </Icon>
        <section>
          <h4>{nickname}님이 내 게시물에 단 댓글</h4>
          <p>{text}</p>
          <span>{date}</span>
        </section>
      </Alarm>

      <Alarm className="replayComment">
        <Icon>
          <img src={process.env.PUBLIC_URL + '/images/alarm_comment.svg'} alt="댓글" />
        </Icon>
        <section>
          <h4>{nickname}님이 내 댓글에 단 답글</h4>
          <p>{text}</p>
          <span>{date}</span>
        </section>
      </Alarm>
    </AlarmBox>
  );
};

export default AlarmList;
