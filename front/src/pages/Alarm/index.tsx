import { AlarmComment } from "components/Alarm/Comment";
import { AlarmFollow } from "components/Alarm/Follow";
import { AlarmLike } from "components/Alarm/Like";
import { AlarmReComment } from "components/Alarm/ReComment";
import FooterNav from "components/Common/FooterNav";
import AlarmHeader from "components/Alarm/Header";
import { alarmLayout } from "./style";
import moment from "moment";
import "moment/locale/ko";

const nowTime = moment().format("YYYY.MM.DD HH:mm");
console.log(nowTime);

const Alarm: React.FC = () => {
  return (
    <main css={alarmLayout}>
      <AlarmHeader />

      <div>
        <AlarmFollow nickname="어피치" date={nowTime} />
        <AlarmLike nickname="어피치" date={nowTime} />
        <AlarmReComment nickname="어피치" text="하이" date={nowTime} />
        <AlarmComment nickname="어피치" text="하이" date={nowTime} />
        <FooterNav />
      </div>
    </main>
  );
};

export default Alarm;
