import React from 'react';
import AlarmHeader from '@src/components/Header/Alarm';
import AlarmList from '@src/components/AlarmList';

const Alarm: React.FC = () => {
  return (
    <div>
      <AlarmHeader title="알림" />
      <AlarmList nickname="muzi" date={20210505} text="이거 보고 열심히 하자! 댓글의 내용을 입력하면 됩니다. 2줄 까지 보여지고 ..." />
    </div>
  );
};

export default Alarm;
