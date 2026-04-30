import { Task } from "../types";
import { TaskCard } from "../molecules/taskCard";

interface TaskListProps {
    tasks: Task[];
    onView: (task: Task) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

export const TaskList = ({
    tasks,
    onView,
    onEdit,
    onDelete,
}: TaskListProps) => {
    if (!tasks.length) {
        return (
            <div className="text-center text-base-content/60">
                No tasks found
            </div>
        );
    }

    return (
        <div className="max-w-full sm:max-w-3xl sm:min-w-2xl lg:max-w-4xl lg:min-w-3xl xl:max-w-7xl xl:min-w-6xl ">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onView={onView}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>

        </div>
    );
};