export type TaskUrl = `https://app.clickup.com/t/${string}/${string}`;

// Define a Task interface
export interface Task {
    id: number;
    title: string;
    completed: boolean;
}