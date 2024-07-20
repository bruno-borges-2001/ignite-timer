import dayjs from 'dayjs'
import { Task } from '../@types/task'

export function secondsToMinutesString(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return [minutes, remainingSeconds].map((el) => String(el).padStart(2, '0'))
}

export function updateTaskStatus(taskId: string, status: Task['status']) {
  const history: Task[] = JSON.parse(
    localStorage.getItem('@pomodoro:history') ?? '[]',
  )

  const taskIndex = history.findIndex((el) => el.id === taskId)

  if (taskIndex === -1) return

  history[taskIndex].status = status

  localStorage.setItem('@pomodoro:history', JSON.stringify(history))
}

export function updateDocumentTitle(task: Task | null) {
  if (!task) {
    document.title = 'Ignite Timer'
    return
  }

  const [minutes, seconds] = secondsToMinutesString(
    task.duration * 60 - dayjs().diff(task.created_at, 'seconds'),
  )

  const timer = `${minutes}:${seconds}`

  document.title = `(${timer}) ${task.description} :: Ignite Timer`
}
