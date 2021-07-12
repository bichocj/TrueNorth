import { useHistory, useLocation } from "react-router-dom";
import { getCourseByUuid } from '../../utlis/storage'
import { Button, Card, Divider, } from 'antd';
import { updateTask } from '../../utlis/api'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default function TaskDetail( ) {
  const query = useQuery();
  const taskUuid = query.get('uuid');
  const task = getCourseByUuid(taskUuid);
  const history = useHistory();

  return (
    <>
      <Divider orientation="left">Task</Divider>
        <Card 
          title={`task ${task.uuid}`} 
          bordered={true} 
          style={{ width: 250, margin: '20px auto 20px' }}
          actions={[
            <Button 
              type="primary"
              onClick={() => updateTask(task.uuid)}
            >
              Complete
            </Button>,
            <Button 
              onClick={() => history.push('/')}
            >
              Close
            </Button>
          ]}
        >
          <p>{task.title}</p>
        </Card>          
    </>
  )
}