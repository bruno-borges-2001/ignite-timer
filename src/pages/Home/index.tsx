import { yupResolver } from '@hookform/resolvers/yup'
import { HandPalm, Play } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Task } from '../../@types/task'
import useTimer from '../../hooks/useTimer'
import { Container, Fields, SubmitButton, TaskInput, TimeInput } from './styles'
import Timer from './Timer'

const schema = yup.object().shape({
  task: yup.string().required(),
  time: yup.number().required().min(1).max(60),
})

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { timerRunning, startTimer, stopTimer } = useTimer()

  useEffect(() => {
    if (timerRunning) return
    reset()
  }, [timerRunning, reset])

  const handleFormSubmit = handleSubmit((data) => {
    startTimer(data.task, data.time)
  })

  const handleInterruptForm = () => {
    stopTimer()
    reset()
  }

  const history: Task[] = JSON.parse(
    localStorage.getItem('@pomodoro:history') ?? '[]',
  )
  const lastTaskNames = Array.from(
    new Set(history.map((el) => el.description)),
  ).slice(0, 5)

  console.log(lastTaskNames)

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <Fields>
          <label htmlFor="task">Vou trabalhar em</label>

          <TaskInput
            {...register('task')}
            disabled={timerRunning}
            id="task"
            list="tasks-list"
            placeholder="Dê um nome para o seu projeto"
            error={errors.task?.message}
          />

          <datalist id="tasks-list">
            {lastTaskNames.map((el) => (
              <option key={el} value={el} />
            ))}
          </datalist>

          <label htmlFor="time">durante</label>
          <TimeInput
            {...register('time', { valueAsNumber: true })}
            disabled={timerRunning}
            id="time"
            type="number"
            placeholder="00"
            step={5}
            error={errors.time?.message}
          />
          <span>minutos</span>
        </Fields>

        <Timer />

        {timerRunning ? (
          <SubmitButton
            key="stop"
            type="button"
            running
            onClick={handleInterruptForm}
          >
            <HandPalm size={24} />
            Interromper
          </SubmitButton>
        ) : (
          <SubmitButton key="start" type="submit" disabled={!isValid}>
            <Play size={24} />
            Começar
          </SubmitButton>
        )}
      </form>
    </Container>
  )
}
