import { Task } from "../types";
import { StatusChip } from "../atoms/taskChip";
import { Button } from "@/components/factory/atoms/button";
import { Icon } from "@iconify/react";

export const TaskCard = ({
    task,
    onView,
    onEdit,
    onDelete,
}: {
    task: Task;
    onView: (task: Task) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}) => {
    return (
        <div className="h-56 min-w-56 text-base-content/70 rounded-0 rounded-bl-4xl rounded-tr-3xl rounded-tl-2xl  py-2 px-2 flex flex-col gap-2 bg-white/15!  border border-white/10  ">
            <div className="flex justify-between items-start">
                <h3 className="font-semibold">{task.title}</h3>
                <StatusChip status={task.status} />
            </div>

            <p className="text-sm text-base-content/70 line-clamp-6 break-all ">
                {task.description}
            </p>

            <div className="grow  flex flex-col gap-1 justify-end items-end text-xs text-base-content/50">
                <span>{new Date(task.createdAt).toLocaleString()}</span>

                {/* 🔥 Actions */}
                <div className="flex items-end justify-end gap-2">
                    <Button onClick={() => onView(task)} size='xs' color="secondary" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'lets-icons:view'} />} variant="outlined"  >
                        <></>
                    </Button>
                    <Button onClick={() => onEdit(task)} size='xs' color="secondary" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'boxicons:edit-filled'} />} variant="outlined"  >
                        <></>
                    </Button>
                    <Button onClick={() => onDelete(task.id)} size='xs' color="error" className="rounded-full p-1" endIcon={<Icon className="w-4 h-4" icon={'material-symbols:delete-outline'} />} variant="outlined"  >
                        <></>
                    </Button>
                </div>
            </div>
        </div>
    );
};