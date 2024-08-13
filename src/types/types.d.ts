// src/types/types.d.ts
export interface Task {
  _id: string
  name: string
  isCompleted: boolean
  type: string
  isEditing: boolean
  priority: string
  dateCompleted: Date
}
