export type TaskStatus = 'Concluído' | 'Interrompido' | 'Em Andamento'

export interface Task {
  id: string
  description: string
  duration: number
  created_at: string
  status: TaskStatus
}
