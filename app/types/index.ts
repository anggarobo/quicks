import { Dispatch, SetStateAction } from "react"

export interface Chat {
    id: string
    time: string
    message: string
    name: string
    inboxId: string
}

export interface User {
    name: string
    username: string
    id: string
}

export interface Inbox {
    id: string
    name: string
    messages?: Chat[]
    participant: number
    members: User[]
}

export interface InboxContext {
    inbox?: Inbox[]
    user?: User
    setInbox: Dispatch<SetStateAction<Inbox[] | undefined>>
    findGroup: (id: string) => Inbox | undefined
    isLoading: boolean,
    sendMessage: (arg: Chat) => void
}

export interface Todo {
    id: string
    taskId: string
    title: string
    start_data: string
    end_date: string
    description: string
}

export interface Task {
    id: string
    name: string
    todos: Todo[]
}