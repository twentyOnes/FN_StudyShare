import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Alarm from "./pages/Alarm";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Profile from "./pages/Profile";
import SetUp from "./pages/SetUp";
import SignUp from "./pages/SignUp";
import SignUpComplete from "./pages/SignUp/complete";
import Todo from "./pages/Todo";

const AppLayout = styled.main`
  min-width: 375px;
  max-width: 720px;
  width: 375px;
  margin: 0 auto;
  border: 1px solid #d8d7d7;
  height: 100vh;
  padding: 0 20px;
`;

const App = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/alarm" component={Alarm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/setup" component={SetUp} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/complete" component={SignUpComplete} />
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </BrowserRouter>
    </AppLayout>
  );
};

export default App;
