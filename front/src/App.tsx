import React from "react";
import "antd/dist/antd.css";

import styled from "@emotion/styled";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Start from "./pages/Login/start";
import Feed from "./pages/Feed";
import Write from "./pages/Feed/write";
import Alarm from "./pages/Alarm";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Profile from "./pages/Profile";
import SetUp from "./pages/SetUp";
import Complaint from "./pages/SetUp/complaint";
import SignUp from "./pages/SignUp";
import SignUpComplete from "./pages/SignUp/complete";
import Todo from "./pages/Todo";
import Search from "./pages/Search";

const AppLayout = styled.main`
  border: 1px solid #dbdbdb;
  background: #fff;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  min-height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const App: React.FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Feed} />
          <Route path="/write" component={Write} />
          <Route path="/start" component={Start} />
          <Route path="/alarm" component={Alarm} />
          <Route path="/login" component={Login} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/setup" component={SetUp} />
          <Route path="/complaint" component={Complaint} />
          <Route path="/signup" component={SignUp} />
          <Route path="/complete" component={SignUpComplete} />
          <Route path="/todo" component={Todo} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
