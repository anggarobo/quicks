import { PropsWithChildren, createContext, useCallback, useContext, useState } from "react";
import useSWR, { Fetcher } from "swr";
import type { Chat, InboxContext } from '~/types';
import { fetchQuicks } from "~/utils/inbox";
import useInitUser from "~/utils/useInitUser";
import { Inbox as InboxType } from '~/types';

const initInbox: InboxContext = {
    inbox: [],
    user: undefined,
    setInbox: () => { },
    findGroup: () => undefined,
    isLoading: false,
    sendMessage: () => { }
}
const fetcher: Fetcher<InboxType[], string> = (id?: string) => fetchQuicks(id)
const Inbox = createContext(initInbox)
export const useInboxContext = () => useContext(Inbox)
export const InboxProvider = (props: PropsWithChildren) => {
    const [inbox, setInbox] = useState(initInbox.inbox)
    const user = useInitUser()
    const { isLoading } = useSWR<InboxType[]>('inbox', {
        fetcher,
        onSuccess(data) {
            setInbox(data)
        },
    })

    const findGroup = useCallback((id: string) => {
        if (inbox) {
            return inbox.find(msg => msg.id === id)
        }
    }, [inbox])

    const sendMessage = useCallback((message: Pick<Chat, 'id' | 'message'>) => {
        const chats = inbox?.map(msg => {
            if (msg.id === message.id) {
                return {
                    ...msg,
                    messages: [
                        ...msg?.messages ?? [],
                        {
                            ...message,
                            id: msg.id.concat(`_${+(msg?.messages?.[-1]?.id?.[-1] ?? '0') + 1}`),
                            name: user?.name || '',
                            time: new Date().toString(),
                            inboxId: msg.id
                        }
                    ]
                }
            }
            return msg
        })
        setInbox(chats)
    }, [inbox, user?.name])

    return (
        <Inbox.Provider value={{ inbox, user, findGroup, setInbox, isLoading, sendMessage }} >
            {props.children}
        </Inbox.Provider>
    )
}
