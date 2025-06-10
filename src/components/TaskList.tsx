import { Table, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import { getTasks, deleteTask, executeTask } from '../api/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    message.success('Task deleted');
    loadTasks();
  };

  const handleExecute = async (id: string) => {
    await executeTask(id);
    message.success('Command executed');
    loadTasks();
  };

  return (
    <Table
      dataSource={tasks}
      rowKey="id"
      columns={[
        { title: 'ID', dataIndex: 'id' },
        { title: 'Name', dataIndex: 'name' },
        { title: 'Owner', dataIndex: 'owner' },
        { title: 'Command', dataIndex: 'command' },
        {
          title: 'Actions',
          render: (_, record: any) => (
            <>
              <Button danger onClick={() => handleDelete(record.id)}>Delete</Button>
              <Button type="primary" onClick={() => handleExecute(record.id)} style={{ marginLeft: 8 }}>Run</Button>
            </>
          )
        }
      ]}
    />
  );
};

export default TaskList;
