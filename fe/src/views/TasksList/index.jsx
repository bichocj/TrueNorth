import { useEffect, useState } from 'react'
import { Card, Divider, Row, Col, } from 'antd';
import { getTasks } from '../../utlis/api'
import { setTasksList } from '../../utlis/storage'
import { Link } from "react-router-dom";

export default function TasksList( ) {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getTasks((data) => {
      setTasks(data);
      setTasksList(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div>is loading</div>
    )
  }

  return (
    <>
      <Divider orientation="left">Tasks</Divider>
      <Row justify="center">
        {tasks.map(item => (
          <Col xs={{ span: 16 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }} key={item.uuid}>
            <Link to={`/task?uuid=${item.uuid}`}>
              <Card 
                title={`task ${item.uuid}`} 
                bordered={true} 
                style={{ width: 250, margin: '20px auto 20px' }}                
              >
                <p>{item.title}</p>                
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}