import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 3.125rem 6rem;

  @media (max-width: 768px) {
    padding: 3.125rem 2rem;
  }

  max-height: calc(100% - 3.125rem);

  gap: 2rem;

  & > h1 {
    flex: 0 1 auto;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.gray100};
  }

  & > div {
    flex: 1;
    overflow: auto;
  }
`

export const Table = styled.table`
  min-width: 600px;
  border-collapse: collapse;

  thead {
    position: sticky;
    top: 0;

    background-color: ${({ theme }) => theme.gray600};

    th {
      &:first-child {
        border-radius: 8px 0 0 0;
      }

      &:last-child {
        border-radius: 0 8px 0 0;
      }
    }
  }

  th,
  td {
    text-align: left;
    padding: 1rem 1.5rem;

    &:first-child {
      width: 100%;
    }

    &:not(:first-child) {
      white-space: nowrap;
    }
  }

  tbody tr {
    background: ${({ theme }) => theme.gray700};

    &:hover {
      background: ${({ theme }) => theme.gray700}80;
    }

    td {
      border: 4px solid ${({ theme }) => theme.gray800};
      border-left: 0;
      border-right: 0;
    }
  }
`

const statusColors = {
  Concluído: 'green',
  'Em Andamento': 'yellow',
  Interrompido: 'red',
} as const

interface StatusProps {
  status: keyof typeof statusColors
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${({ theme, status }) => theme[statusColors[status]]};
  }
`
