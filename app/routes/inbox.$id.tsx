import { Button, Input } from "@headlessui/react";
import { NavLink, useParams } from "@remix-run/react";
import { FormEventHandler, useEffect, useRef } from "react";
import ChatBox from "~/components/chat-box";
import { IconArrowRight, IconClose } from "~/components/icons";
import Loading from "~/components/loading";
import { useInboxContext } from "~/context/inbox";

function InboxById() {
    const { isLoading, findGroup, sendMessage } = useInboxContext()
    const ref = useRef<HTMLInputElement>(null)
    const wrappChatRef = useRef<HTMLDivElement>(null)
    const { id } = useParams()
    const data = id ? findGroup(id) : undefined
    const users = [...new Set(data?.messages?.map(msg => msg.name))]
    const participants = `${users.length} Participant${users.length >= 1 ? 's' : ''}`

    const onSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        if (data?.id) {
            sendMessage({
                id: data.id,
                message: ref?.current?.value || '',
                time: "",
                name: "",
                inboxId: ""
            })
            ref?.current?.setAttribute('value', '')

            if (ref?.current?.value) {
                ref.current.value = ''
            }
        }
    }

    useEffect(() => {
        (() => {
            wrappChatRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        })()
    }, [data?.messages])


    return (
        <div className="pointer-events-auto relative flex h-full max-h-[100%] w-1/2 flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark" >
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 px-8 py-6 gap-2 dark:border-white/10">
                {isLoading ? (
                    <div className="animate-pulse w-full flex flex-col gap-2 pl-8">
                        <div className="bg-slate-200 h-6 w-3/4 rounded-sm" />
                        <div className="animate-pulse h-3 w-1/4 bg-slate-200 rounded-sm col-span-2" />
                    </div>
                ) : (
                    <>
                        <NavLink to='/inbox'>
                            <IconArrowRight />
                        </NavLink>

                        <div className="w-full overflow-hidden">
                            <p className='text-lg text-[#2F80ED] font-[500] truncate'>{data?.name}</p>
                            <p className='text-[#4F4F4F] text-sm'>{participants}</p>
                        </div>
                        <NavLink to='/inbox'><IconClose /></NavLink>
                    </>
                )}
            </div>
            <div className='relative flex-grow overflow-y-auto px-8'>
                <div ref={wrappChatRef} className='flex flex-col gap-[2px] py-2'>
                    {!isLoading ? (
                        data?.messages?.map((msg, i) => {
                            const prevDate = new Date(data?.messages?.[i - 1]?.time || '').getDate()
                            const currentDate = new Date(msg?.time).getDate()
                            const isNextDate = prevDate < currentDate

                            return (
                                <ChatBox
                                    {...msg}
                                    key={msg.id}
                                    isCont={data?.messages?.[i - 1]?.name === msg?.name}
                                    isNextDate={isNextDate}
                                />
                            )
                        })
                    ) : <Loading label="Loading Chats" />}
                </div>
            </div>
            <div className="px-8 py-6 w-full">
                <form onSubmit={onSubmit} className="flex gap-2">
                    <Input
                        className="h-10 flex-grow rounded-[5px] px-4 border border-[#828282]"
                        name='chat'
                        placeholder="Type a new message"
                        ref={ref}
                    />
                    <Button className='bg-[#2F80ED] h-10 px-4 py-3 flex justify-center items-center text-white rounded-[5px]' >Send</Button>
                </form>
            </div>
        </div>
    );
}

export default InboxById;