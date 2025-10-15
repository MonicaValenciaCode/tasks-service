import { ITask } from "../interfaces/v1/tasks.interfaces";
import { TaskStatus } from "../enums/task.enum";

export const mockTasksData: ITask[] = [
  {
    task_id: 1,
    task_name: "Mock Task 1",
    frequency: "Daily",
    category: {
      category_id: "cat-1",
      category_name: "Work",
    },
    start_date: new Date("2025-01-01T00:00:00.000Z"),
    history: [
      {
        date: new Date("2025-01-01"),
        status: TaskStatus.done,
      },
    ],
    due_date: new Date("2025-01-02T00:00:00.000Z"),
  },
  {
    task_id: 2,
    task_name: "Mock Task 2",
    frequency: "Weekly",
    category: {
      category_id: "cat-2",
      category_name: "Personal",
    },
    start_date: new Date("2025-01-05T00:00:00.000Z"),
    history: [],
    due_date: new Date("2025-01-12T00:00:00.000Z"),
  },
  {
    task_id: 3,
    task_name: "Mock Task 3",
    frequency: "Monthly",
    category: {
      category_id: "cat-3",
      category_name: "Fitness",
    },
    start_date: new Date("2025-01-10T00:00:00.000Z"),
    history: [
      {
        date: new Date("2025-01-10"),
        status: TaskStatus.pending,
      },
    ],
    due_date: new Date("2025-02-10T00:00:00.000Z"),
  },
  {
    task_id: 4,
    task_name: "Mock Task 4",
    frequency: "Monthly",
    category: {
      category_id: "cat-3",
      category_name: "Fitness",
    },
    start_date: new Date("2025-01-10T00:00:00.000Z"),
    history: [
      {
        date: new Date("2025-01-10"),
        status: TaskStatus.unfinished,
      },
    ],
    due_date: new Date("2025-02-10T00:00:00.000Z"),
  },
];
