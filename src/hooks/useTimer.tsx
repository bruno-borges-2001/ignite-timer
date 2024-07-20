import dayjs from 'dayjs'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { v4 as uuid } from 'uuid'
import { Task } from '../@types/task'
import { updateDocumentTitle, updateTaskStatus } from '../lib/utils'

interface TimerContextProps {
  timerRunning: boolean
  secondsRemaining: number

  startTimer: (description: string, minutes: number) => void
  stopTimer: () => void
}

const timerContext = createContext({} as TimerContextProps)

export function TimerProvider({ children }: React.PropsWithChildren) {
  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [timerRunning, setTimerRunning] = useState(false)
  const [secondsRemaining, setSecondsRemaining] = useState(0)

  useEffect(() => {
    updateDocumentTitle(currentTask)

    if (!timerRunning || !currentTask) return

    if (secondsRemaining <= 0) {
      setCurrentTask((prev) => {
        if (prev) {
          updateTaskStatus(prev.id, 'Concluído')
        }
        return null
      })

      setTimerRunning(false)
      return
    }

    const timeout = setTimeout(() => {
      const remaining =
        currentTask.duration * 60 -
        dayjs().diff(currentTask.created_at, 'seconds')

      setSecondsRemaining(remaining)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [timerRunning, secondsRemaining, currentTask])

  const startTimer = useCallback((description: string, minutes: number) => {
    const newTask: Task = {
      id: uuid(),
      description,
      duration: minutes,
      created_at: new Date().toISOString(),
      status: 'Em Andamento',
    }

    setCurrentTask(newTask)
    setSecondsRemaining(minutes * 60)
    setTimerRunning(true)

    const history = JSON.parse(
      localStorage.getItem('@pomodoro:history') ?? '[]',
    )

    localStorage.setItem(
      '@pomodoro:history',
      JSON.stringify([newTask, ...history]),
    )
  }, [])

  const stopTimer = useCallback(() => {
    try {
      if (!currentTask) return
      updateTaskStatus(currentTask.id, 'Interrompido')
      setSecondsRemaining(0)
      setTimerRunning(false)
    } finally {
      setCurrentTask(null)
    }
  }, [currentTask])

  return (
    <timerContext.Provider
      value={{ timerRunning, secondsRemaining, startTimer, stopTimer }}
    >
      {children}
    </timerContext.Provider>
  )
}

export default function useTimer() {
  return useContext(timerContext)
}
