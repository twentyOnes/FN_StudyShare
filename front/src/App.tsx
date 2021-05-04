import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './pages/Feed';
import Alarm from './pages/Alarm';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Profile from './pages/Profile';
import SetUp from './pages/SetUp';
import SignUp from './pages/SignUp';
import SignUpComplete from './pages/SignUp/complete';
import Todo from './pages/Todo';

const AppLayout = styled.main`
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1024px;
  min-height: 100%;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <AppLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Feed} />
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
