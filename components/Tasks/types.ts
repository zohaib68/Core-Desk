export type TaskStatus = "open" | "in-progress" | "closed" | "postponed";

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
};