import dayjs from 'dayjs'
import { useState } from 'react'
import { Task } from '../../@types/task'
import { Container, Status, Table } from './styles'

export default function History() {
  const [history] = useState<Task[]>(() => {
    const tasks = localStorage.getItem('@pomodoro:history') || '[]'
    return JSON.parse(tasks)
  })

  return (
    <Container>
      <h1>Meu histórico</h1>

      <div>
        <Table cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((task) => (
              <tr key={task.id}>
                <td>{task.description}</td>
                <td>
                  {task.duration} minuto{task.duration !== 1 ? 's' : ''}
                </td>
                <td>{dayjs(task.created_at).fromNow()}</td>
                <td>
                  <Status status={task.status}>{task.status}</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}
