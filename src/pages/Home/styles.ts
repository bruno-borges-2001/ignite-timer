import styled, { css } from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
  }
`

export const Fields = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;

  label,
  span {
    font-size: 1.125rem;
    font-weight: 500;
  }
`

interface BaseInputProps {
  error?: string
}

const BaseInput = styled.input<BaseInputProps>`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid
    ${({ theme, error }) => (error ? theme.redDark : theme.gray500)};
  font-weight: 700;
  font-size: inherit;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-bottom-color: ${({ theme }) => theme.green};
  }

  &:disabled {
    opacity: 0.7;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const TimeInput = styled(BaseInput)`
  width: 4rem;
`

export const Countdown = styled.div`
  font-size: 10rem;
  display: flex;
  justify-content: center;

  font-family: 'Roboto Mono', monospace;

  & > span {
    color: ${({ theme }) => theme.green};
  }

  & > div {
    display: flex;
    justify-content: center;
    gap: 1rem;

    & > span {
      background-color: ${({ theme }) => theme.gray700};
      border-radius: 8px;
      padding: 0rem 2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 1rem;

    & > span {
      display: none;
    }
  }
`

interface SubmitButtonProps {
  running?: boolean
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;

  font-weight: 700;
  text-align: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  ${({ theme, running }) => css`
    color: ${running ? theme.white : theme.gray100};
    background-color: ${running ? theme.red : theme.green};

    &:hover {
      background-color: ${running ? theme.redDark : theme.greenDark};
    }
  `}

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`
