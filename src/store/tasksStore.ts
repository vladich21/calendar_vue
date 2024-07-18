

// import { defineStore } from 'pinia'

// interface Task {
//   _id: string
//   name: string
//   isCompleted: boolean
//   type: string
// }

// interface State {
//   tasks: Task[]
// }

// export const useTasksStore = defineStore('tasks', {
//   state: (): State => ({
//     tasks: [
//       {
//         _id: 'wegfwe1234',
//         name: 'Create to do app in vue js',
//         isCompleted: false,
//         type: 'business',
//       },
//     ],
//   }),
//   actions: {
//     addTask(task: Task) {
//       this.tasks.push(task)
//     },
//     toggleTaskCompletion(taskId: string) {
//       const task = this.tasks.find(task => task._id === taskId)
//       if (task) {
//         task.isCompleted = !task.isCompleted
//       }
//     },
//   },
//   getters: {
//     allTasks: (state: State) => state.tasks,
//   },
// })
