import { Button, Form, Input, message } from 'antd';
import { createTask } from '../api/taskService';

const TaskForm = () => {
  const onFinish = async (values: any) => {
    try {
      await createTask(values);
      message.success('Task created successfully');
    } catch (err) {
      message.error('Error creating task');
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item name="id" label="ID" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Task Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="owner" label="Owner" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="command" label="Command" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">Create Task</Button>
    </Form>
  );
};

export default TaskForm;
