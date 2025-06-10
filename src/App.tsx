import React from 'react';
import { Layout, Tabs } from 'antd';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskExecution from './components/TaskExecution';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ color: 'white', fontSize: '24px' }}>
      Kaiburr Task Manager
    </Header>
    <Content style={{ padding: '20px' }}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Create Task" key="1">
          <TaskForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="View & Manage Tasks" key="2">
          <TaskList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Execution Output" key="3">
          <TaskExecution />
        </Tabs.TabPane>
      </Tabs>
    </Content>
  </Layout>
);

export default App;
