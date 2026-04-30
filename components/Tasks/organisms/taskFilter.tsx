import { SearchInput } from "@/components/notes/atoms/input";
import { TaskStatus } from "../types";

export const TaskFilters = ({
    search,
    setSearch,
    status,
    setStatus,
}: {
    search: string;
    setSearch: (v: string) => void;
    status: TaskStatus | "all";
    setStatus: (v: TaskStatus | "all") => void;
}) => {
    return (
        <div className="flex justify-center items-center gap-3 flex-wrap">
            <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            <details className="dropdown">
                <summary className="btn px-6 w-32 m-1 capitalize bg-transparent border border-neutral/20 text-base-content/60 rounded-full shadow-none!">{status}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setStatus('all')}><a>All</a></li>
                    <li onClick={() => setStatus('open')}><a>Open</a></li>
                    <li onClick={() => setStatus('in-progress')}><a>In Progress</a></li>
                    <li onClick={() => setStatus('closed')}><a>Closed</a></li>
                    <li onClick={() => setStatus('postponed')}><a>Postponed</a></li>
                </ul>
            </details>
        </div>
    );
};