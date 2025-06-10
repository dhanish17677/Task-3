import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { getTasks, getExecutionsForTask } from '../api/taskService';

const { Panel } = Collapse;

const TaskExecution = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    
    getTasks().then(res => {
      const fetchedTasks = res.data;
      Promise.all(
        fetchedTasks.map(async (task: any) => {
          const execRes = await getExecutionsForTask(task.id);
          return { ...task, taskExecutions: execRes.data };
        })
      ).then(updatedTasks => {
        setTasks(updatedTasks);
      });
    });
  }, []);

  return (
    <Collapse accordion>
      {tasks.map((task: any) =>
        task.taskExecutions?.map((exec: any, idx: number) => (
          <Panel
            header={`Task: ${task.name} | Run: ${idx + 1}`}
            key={`${task.id}-${idx}`}
          >
            <p><strong>Start:</strong> {exec.startTime}</p>
            <p><strong>End:</strong> {exec.endTime}</p>
            <p><strong>Status:</strong> {exec.status}</p>
          </Panel>
        ))
      )}
    </Collapse>
  );
};

export default TaskExecution;
