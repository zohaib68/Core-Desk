import { TaskStatus } from "../types";

const statusStyles: Record<TaskStatus, string> = {
    open: "bg-info/50 shadow-sm shadow-info/30 text-info-content",
    "in-progress": "bg-warning/50 shadow-sm shadow-warning/30 text-warning-content",
    closed: "bg-success/50 shadow-sm shadow-success/30 text-success-content",
    postponed: "bg-error/50 shadow-sm shadow-error/30 text-error-content",
};

export const StatusChip = ({ status }: { status: TaskStatus }) => {
    return (
        <span
            className={`px-2 py-1 text-xs rounded-full  capitalize ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
};