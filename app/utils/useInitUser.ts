import { useEffect, useState } from "react"
import { User } from "~/types"

const BASE_URL = 'https://my-json-server.typicode.com/anggarobo/quicks/'
export async function fetchUser() {
    try {
        const response = await fetch(BASE_URL.concat('user'))
        const json: User = await response.json()
        if (json) {
            return json
        }
    } catch (error) {
        console.error(error)
    }
}

const getUser = () => {
    try {
        const user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user)
        }
    } catch (error) {
        console.error(error)
    }
}

export default function useInitUser() {
    const [user, setUser] = useState<User | undefined>(getUser())

    useEffect(() => {
        const currentUser = getUser()

        if (!currentUser) {
            fetchUser()
                .then(data => {
                    setUser(data)
                    localStorage.setItem('user', JSON.stringify(data))
                })
                .catch(err => console.error(err))
        } else setUser(getUser())        
    }, [])

    return user
}