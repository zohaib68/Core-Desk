import { useState } from "react";
import { Task, TaskStatus } from "../types";
import { Input } from "@/components/factory/atoms/input";
import { TextArea } from "@/components/factory/atoms/textArea";

export const TaskForm = ({
    onSubmit,
    initial,
}: {
    onSubmit: (task: Omit<Task, "id" | "createdAt">) => void;
    initial?: Task;
}) => {
    const [title, setTitle] = useState(initial?.title || "");
    const [description, setDescription] = useState(initial?.description || "");
    const [status, setStatus] = useState<TaskStatus>(
        initial?.status || "open"
    );

    return (
        <div className="flex flex-col gap-3">
            <Input
                className="input input-bordered"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextArea
                className="textarea textarea-bordered"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                className="select select-bordered w-full"
                value={status}
                onChange={(e) => setStatus(e.target.value as TaskStatus)}
            >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
                <option value="postponed">Postponed</option>
            </select>

            <button
                className="btn btn-primary"
                onClick={() =>
                    onSubmit({
                        title,
                        description,
                        status,
                    })
                }
            >
                Save Task
            </button>
        </div>
    );
};