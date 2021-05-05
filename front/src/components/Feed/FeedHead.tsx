import React from "react";
import { Head, Profile, Nickname, MoreBtn } from "./styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

type Props = {
  id: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const FeedHead = ({ id }: Props) => {
  return (
    <div>
      <Head>
        <div className="left">
          <Profile>
            <Avatar icon={<UserOutlined />} />
          </Profile>
          <Nickname>{id}</Nickname>
        </div>

        <MoreBtn>
          <img
            src={process.env.PUBLIC_URL + "/images/btn_more.svg"}
            alt="더보기"
          />
        </MoreBtn>
      </Head>
    </div>
  );
};

export default FeedHead;
