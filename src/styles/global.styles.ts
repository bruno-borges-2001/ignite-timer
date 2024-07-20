import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.green};
  }

  ::placeholder {
    color: ${({ theme }) => theme.gray500};
  }

  body {
    background-color: ${({ theme }) => theme.gray900};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.gray300};
  }

  input::-webkit-calendar-picker-indicator {
    display: none !important;
    -webkit-appearance: none !important;
}
`

export default GlobalStyle
