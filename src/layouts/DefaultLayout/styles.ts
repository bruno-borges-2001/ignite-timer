import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100dvh;
  width: 100vw;

  display: grid;
  place-items: center;

  padding: 1rem;
`

export const Container = styled.div`
  position: relative;

  max-width: min(70rem, calc(100vw - 2rem));
  max-height: 100dvh;

  height: clamp(47rem, calc(100dvh - 10rem), 100dvh);

  width: 100%;

  background-color: ${({ theme }) => theme.gray800};

  border-radius: 8px;

  padding-top: 2.5rem;

  display: flex;
  flex-direction: column;
`
