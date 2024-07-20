import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Router from './Router'
import GlobalStyle from './styles/global.styles'
import defaultTheme from './styles/themes/default'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TimerProvider } from './hooks/useTimer'

dayjs.extend(relativeTime).locale(ptBR)

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <TimerProvider>
          <Router />
          <GlobalStyle />
        </TimerProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
