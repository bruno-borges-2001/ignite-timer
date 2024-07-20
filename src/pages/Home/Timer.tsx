import useTimer from '../../hooks/useTimer'
import { secondsToMinutesString } from '../../lib/utils'
import { Countdown } from './styles'

export default function Timer() {
  const { secondsRemaining } = useTimer()

  const [minutes, seconds] = secondsToMinutesString(secondsRemaining)

  return (
    <Countdown>
      <div>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </div>
      <span>:</span>
      <div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>
    </Countdown>
  )
}
