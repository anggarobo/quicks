import { NavLink } from "@remix-run/react";
import { IconAvatar } from "./icons";
import { Inbox } from "~/types";

export default function CardInbox({order, ...group}: Inbox & { order: number }) {
    return (
        <div className={`flex flex-row gap-8 bg-white pb-4 ${order > 0 ? 'pt-4' : ''}`} >
            <div className='relative'>
                <div className='absolute left-4'>
                    <IconAvatar bg="bg-[#2F80ED]" />
                </div>
                <div>
                    <IconAvatar bg="bg-[#E0E0E0]" fill="black" />
                </div>
            </div>
            <div className='text-[#4F4F4F]'>
                <div className='flex flex-row gap-6'>
                    <NavLink to={group.id}>
                        <p className='text-lg hover:text-purple-800 text-[#2F80ED] font-[500]'>{group.name}</p>
                    </NavLink>
                    <p className='text-sm flex-grow'>{group.messages?.at(-1)?.time}</p>
                </div>
                {group?.messages?.length ? (
                    <>
                        <p className='font-[500]'>{group.messages?.at(-1)?.name} : </p>
                        <p className='text-sm'>{group.messages?.at(-1)?.message}</p>
                    </>
                ) :  null }
            </div>
        </div>
    )
}