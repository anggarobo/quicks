import { NavLink, useMatches } from "@remix-run/react";
import { IconInbox, IconQuicks, IconTask } from "./icons";
import { Button, Transition } from "@headlessui/react";
import { useState } from "react";


function Quicks() {
    const [openQuicks, setOpenQuicks] = useState(false)
    const matches = useMatches()
    const path = matches?.[1]?.pathname
    const buttons = path === '/' || path === '/inbox' ? ['inbox', 'task'] : ['task', 'inbox']
    console.log({ matches })

    return (
        <div className="flex gap-8 flex-row-reverse relative">
            <Transition
                show={!openQuicks}
                enter="duration-200 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Button
                    className="rounded-full h-[68px] w-[68px] flex items-center justify-center bg-[#2F80ED]"
                    onClick={(e) => {
                        e.stopPropagation()
                        setOpenQuicks(true)
                    }}
                >
                    <IconQuicks />
                </Button>
            </Transition>
            <Transition
                show={openQuicks}
                enter="transition ease-out duration-500"
                enterFrom="opacity-0 translate-x-1"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in duration-1000"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-1"
            >
                <NavLink to='/' className="absolute bottom-0 right-5 z-40" >
                    <Button
                        className="rounded-full h-[68px] flex items-center justify-center w-[68px] bg-[#4F4F4F]"
                        onClick={(e) => {
                            e.stopPropagation()
                            setOpenQuicks(false)
                        }}
                    >
                        <IconQuicks />
                    </Button>
                </NavLink>
            </Transition>
            {buttons.map(item => {
                const icon = {
                    task: <IconTask {...(!path.includes(item) && { fill: "#F8B76B" })} />,
                    inbox: <IconInbox {...(!path.includes(item) && { fill: "#8785FF" })} />
                }[item]

                const activeColor = {
                    task: "#F8B76B",
                    inbox: "#8785FF"
                }[item]

                const bg = path.includes(item) ? activeColor : "#F2F2F2"

                return (
                    <Transition
                        key={item}
                        show={openQuicks}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 translate-x-1"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-1000"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-1"
                    >
                        <NavLink to={`/${item}`} className={`z-50 rounded-full h-[68px] w-[68px] flex items-center justify-center bg-[${bg}]`} style={{ background: bg }}  >
                            {icon}
                        </NavLink>
                    </Transition>
                )
            })}
        </div>
    );
}

export default Quicks;