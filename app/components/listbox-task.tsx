import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { IconClock, IconExpand, IconKebab, IconPencil } from "./icons";
import { Todo } from "~/types";
import { dayLeft } from "~/utils/dayLeft";
import { useState } from "react";

export default function ListBoxTask(props: Todo & { order: number }) {
    const dueDate = props?.end_date?.split('/')?.reverse()?.join('-')
    const day_left = dayLeft(props?.end_date)
    const DAY_LEFT = day_left > 0 ? `${day_left} Day${day_left === 1 ? '' : 's'} Left` : ''  

    const [checked, setChecked] = useState(day_left <= 0)
    const isChecked = day_left <= 0 || checked
    
    return (
        <Disclosure key={props.id}>
            <div className={`flex items-start bg-white gap-2 pb-6 ${props.order > 0 ? 'pt-[22px]' : ''}`}>
                <div className="flex-grow flex items-start gap-2">
                    <input 
                        checked={checked} 
                        className="mt-[6px]" 
                        disabled={day_left <= 0} 
                        id="task_check" 
                        onChange={e => setChecked(e.target.checked)} 
                        type="checkbox" name="task" 
                    />
                    <p className={`font-medium ${isChecked ? 'line-through text-[#828282]' : 'text-[#4F4F4F]'}`}>{props.title}</p>
                </div>
                <div className="flex w-[50%] items-start justify-end gap-2">
                    <p className="text-sm text-[#EB5757]">{DAY_LEFT}</p>
                    <p className="text-sm">{props.end_date}</p>
                    <DisclosureButton>
                        <IconExpand />
                    </DisclosureButton>
                    <div>
                        <IconKebab />
                    </div>
                </div>
            </div>
            <DisclosurePanel style={{ border: 'unset' }} className="text-gray-500 bg-white flex flex-col gap-2 pl-6 pb-4">
                <div className="flex gap-2 items-center">
                    <IconClock />
                    <input defaultValue={dueDate} className="border-2 h-10 rounded px-3" type="date" name="date" id="" />
                </div>
                <div className="flex gap-2 items-start">
                    <div className="pt-2">
                        <IconPencil />
                    </div>
                    {props.description}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}