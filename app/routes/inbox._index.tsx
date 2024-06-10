import { Input } from "@headlessui/react";
import { useMemo, useState } from "react";
import CardInbox from "~/components/card-inbox";
import Loading from "~/components/loading";
import { useInboxContext } from "~/context/inbox";

function InboxPage() {
    const { isLoading, inbox } = useInboxContext()
    const [keyword, setKeyword] = useState('')

    const messages = useMemo(() => {
        if (keyword) {
            const msgs = inbox?.filter(msg => msg?.name?.toLowerCase()?.includes(keyword))
            return msgs
        }
        return inbox
    }, [inbox, keyword])

    return (
        <div className="pointer-events-auto relative flex max-h-[100%] h-full w-1/2 flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark pb-6" >
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md px-8 pt-6 pb-[22px] gap-2">
                <Input 
                    className="border data-[hover]:border-blue-200 data-[hover]:border-2 data-[focus]:bg-blue-100 px-14 h-[32px] rounded-md w-full" 
                    name="search" 
                    onChange={e => setKeyword(e.target.value)}
                    placeholder='Search' 
                    type="text" 
                />
            </div>
            <div className='relative overflow-y-auto bg-white px-8 pb-6'>
                {isLoading ? (
                    <Loading>Loading Chats</Loading>
                ) : (
                    <div className='h-full relative bg-white dark:bg-slate-800 flex flex-col divide-y dark:divide-slate-200/5'>
                        {messages?.length ? messages.map((group, i) => {
                            return <CardInbox key={group.id} {...group} order={i} />
                        }) : null }
                    </div>
                )}
            </div>

        </div>
    );
}

export default InboxPage;