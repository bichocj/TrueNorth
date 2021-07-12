import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import TasksList from './views/TasksList';
import TaskDetail from './views/TaskDetail';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div>
      <Router>
        <Header>True North</Header>
        <Content className="content">
          <Switch>
            <Route path="/task">
              <TaskDetail />
            </Route>
            <Route path="/">
              <TasksList />
            </Route>
          </Switch>
        </Content>
        <Footer>done by Javier</Footer>
      </Router>
    </div>
  );
}

export default App;
