import { Button, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IconKebab } from "./icons";
import useInitUser from "~/utils/useInitUser";
import { Chat } from "~/types";
import { useInboxContext } from "~/context/inbox";
import { useCallback } from "react";

const Options = ({ visible, onRemove }: {onRemove: () => void, visible: boolean}) => {
    if (!visible) return null

    return (
        <Menu>
            <MenuButton>
                <IconKebab />
            </MenuButton>
            <MenuItems anchor="bottom end" className="bg-white border divide-y rounded shadow" >
                <MenuItem >
                    <a className="block py-2 px-4 text-[#2F80ED] data-[focus]:bg-blue-100" href="/settings">
                        Edit
                    </a>
                </MenuItem>
                <MenuItem>
                    <Button
                        className="block py-2 px-4 text-[#EB5757] data-[focus]:bg-blue-100"
                        onClick={onRemove}
                    >
                        Delete
                    </Button>
                </MenuItem>
            </MenuItems>

        </Menu>
    )
}

export default function ChatBox({ isCont, isNextDate, ...message }: { isCont: boolean, isNextDate: boolean } & Chat) {
    const user = useInitUser()
    const isMe = message.name === user?.name
    const { setInbox } = useInboxContext()
    const isToday = new Date(message.time).toDateString() === new Date().toDateString()
    let date = isToday ? "Today" : ''
    date = date.concat(` ${new Date(message.time).toLocaleDateString('en-ID', {
        month: "long",
        day: "2-digit",
        year: "numeric"
    }) }`)

    const onRemove = useCallback(() => {
        setInbox(prev => {
            if (prev) {
                return prev.map(msg => {
                    return {
                        ...msg,
                        messages: msg?.messages?.filter(chat => chat?.id !== message?.id)
                    }
                })
            }
        })
    }, [message?.id, setInbox])


    return (
        <>
            {isNextDate ? (
                <div className="flex my-4 justify-between items-center">
                    <div className="border-b border-[#4F4F4F] w-full"></div>
                    <p className="text-sm w-full text-[#4F4F4F] text-center">
                        {date}
                    </p>
                    <div className="border-b border-[#4F4F4F] w-full"></div>
                </div>
            ) : null}
            <div key={message.id} className={`max-w-[75%] ${isMe ? 'self-end' : ''}`} >
                {!isCont ? <p dir={isMe ? "rtl" : "ltr"} className={`${isMe ? 'text-[#9B51E0]' : 'text-[#E5A443]'} font-medium self-end`} >{isMe ? 'You' : message.name}</p> : null}
                <div className="flex gap-2 items-start">
                    <Options visible={isMe} onRemove={onRemove} />
                    <div className={`px-2 py-1 flex flex-col gap-1 rounded ${isMe ? 'bg-[#EEDCFF]' : 'bg-[#FCEED3]'}`} >
                        <p>{message.message}</p>
                        <p className="text-xs">
                            {new Date(message.time).toLocaleTimeString('en-ID', {
                                hour12: false,
                                hour: "numeric",
                                minute: "numeric"
                            })}
                        </p>
                    </div>
                    <Options visible={!isMe} onRemove={onRemove} />
                </div>
            </div>
        </>
    )
}