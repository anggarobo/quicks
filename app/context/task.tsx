import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { Task } from "~/types";
import { fetchQuicks } from "~/utils/inbox";

interface TaskStateContext {
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
    isLoading: boolean
}

const init: TaskStateContext = {
    tasks: [],
    setTasks: () => { },
    isLoading: false
}

const fetcher: Fetcher<Task[], string> = (id?: string) => fetchQuicks(id)
const TaskContext = createContext(init)
export const useTaskContext = () => useContext(TaskContext)
export function TaskProvider(props: PropsWithChildren) {
    const [tasks, setTasks] = useState<Task[]>([])
    const { isLoading } = useSWR<Task[]>('tasks', {
        fetcher,
        onSuccess(data) {
            setTasks(data)
        },
    })

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                isLoading
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}
