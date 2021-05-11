import React from 'react';
import { Progress } from 'antd';
import { Card, Hello, Goal } from './styles';

type Props = {
  nickname?: string;
};

//오늘의 달성도
// eslint-disable-next-line
const FeedHead = ({ nickname }: Props) => {
  return (
    <div>
      <Card>
        <Hello>
          안녕하세요 {nickname}님,
          <br />
          <strong className="highlight">오늘 목표한 스터디</strong>를<br />
          달성해보세요!
        </Hello>

        <Goal>
          <span className="date">21. 03. 14</span>
          <h3>오늘의 달성도</h3>
          <Progress percent={30} strokeColor="2656ff" />
        </Goal>
      </Card>
    </div>
  );
};

export default FeedHead;
