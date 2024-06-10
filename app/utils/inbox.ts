
import { Inbox } from "~/types"

const BASE_URL = 'https://my-json-server.typicode.com/anggarobo/quicks/'

export const fetchInbox = async (callback?: (arg: Inbox[]) => void) => {
    try {
        const response = await fetch(BASE_URL.concat('quicks_inbox'))
        const json: Inbox[] = await response.json()
        if (callback) {
            if (callback) callback(json)
            else return json
        }
    } catch (error) {
        console.error(error)
    }
}

export const fetchQuicks = (id?: string) => fetch(BASE_URL.concat(id || '')).then(res => res.json())
