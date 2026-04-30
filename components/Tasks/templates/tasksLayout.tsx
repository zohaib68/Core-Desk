"use client";

import { useEffect, useState } from "react";
import { Task, TaskStatus } from "../types";
import { TaskForm } from "../organisms/taskForm";
import { TaskList } from "../organisms/taskList";
import { TaskFilters } from "../organisms/taskFilter";
import { Modal, openModal, closeModal } from "@/components/factory/organisms/modal";
import { Button } from "@/components/factory/atoms/button";
import { Icon } from "@iconify/react";
import { MeshLayout } from "@/components/factory/templates/meshLayout";
import { StatusChip } from "../atoms/taskChip";

const STORAGE_KEY = "tasks";

export const TaskLayout = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selected, setSelected] = useState<Task | null>(null);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<TaskStatus | "all">("all");

    // Load
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setTasks(JSON.parse(stored));
    }, []);

    // Save
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    // Add
    const addTask = (task: Omit<Task, "id" | "createdAt">) => {
        setTasks((prev) => [
            {
                ...task,
                id: crypto.randomUUID(),
                createdAt: new Date().toISOString(),
            },
            ...prev,
        ]);
        closeModal("add-task");
    };

    // Edit
    const updateTask = (updated: Task) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === updated.id ? updated : t))
        );
        closeModal("edit-task");
    };

    // Delete
    const deleteTask = (id: string) => {
        if (id) {
            setTasks((prev) => prev.filter((t) => t.id !== deleteId));
        }
        setDeleteId(null);
        closeModal("delete-task");
    };

    // Filter
    const filtered = tasks.filter((t) => {
        const matchSearch =
            t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.description.toLowerCase().includes(search.toLowerCase());

        const matchStatus = status === "all" ? true : t.status === status;

        return matchSearch && matchStatus;
    });

    return (
        <div className="relative">
            <MeshLayout />
            <div className="relative z-10 p-4 flex flex-col gap-6">

                <div className="flex justify-end items-center">
                    <Button
                        color="primary"
                        className="rounded-full"
                        onClick={() => openModal("add-task")}
                        endIcon={<Icon icon={'gridicons:add-outline'} className="w-4 h-4" />}
                    >
                        Add Task
                    </Button>
                </div>

                {/* Add Modal */}
                <Modal modalId="add-task" title="Add Task">
                    <TaskForm onSubmit={addTask} />
                </Modal>

                {/* Edit Modal */}
                <Modal modalId="edit-task" title="Edit Task">
                    {selected && (
                        <TaskForm
                            initial={selected}
                            onSubmit={(data) =>
                                updateTask({ ...selected, ...data })
                            }
                        />
                    )}
                </Modal>

                {/* View Modal */}
                <Modal modalId="view-task" title="Task Details">
                    {selected && (
                        <div className="flex flex-col gap-3">

                            <div className="flex justify-between items-center">
                                <h2 className="font-semibold text-lg">{selected.title}</h2>

                                {/* ✅ ADD THIS */}
                                <StatusChip status={selected.status} />
                            </div>

                            <p className="text-base-content/80">
                                {selected.description}
                            </p>

                            <span className="text-sm text-base-content/60">
                                {new Date(selected.createdAt).toLocaleString()}
                            </span>
                        </div>
                    )}
                </Modal>

                {/* Delete Confirmation Modal */}
                <Modal modalId="delete-task" title="Delete Task">
                    <div className="flex flex-col gap-4">
                        <p>Are you sure you want to delete this task?</p>

                        <div className="flex justify-end gap-2">
                            <Button
                                className="btn btn-ghost"
                                onClick={() => {
                                    setDeleteId(null);
                                    closeModal("delete-task");
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                color="error"
                                onClick={() => deleteTask(deleteId!)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </Modal>

                <TaskFilters
                    search={search}
                    setSearch={setSearch}
                    status={status}
                    setStatus={setStatus}
                />
                <div className="flex justify-center items-center">
                    <TaskList
                        tasks={filtered}
                        onView={(t) => {
                            setSelected(t);
                            openModal("view-task");
                        }}
                        onEdit={(t) => {
                            setSelected(t);
                            openModal("edit-task");
                        }}
                        onDelete={(id) => {
                            setDeleteId(id);
                            openModal("delete-task");
                        }}
                    />
                </div>

            </div>
        </div>

    );
}