import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "@remix-run/react";
import CustomButton from "~/components/button";
import ListBoxTask from "~/components/listbox-task";
import { IconExpand } from "~/components/icons";
import Loading from "~/components/loading";
import { useTaskContext } from "~/context/task";
import { Task } from "~/types";

const Options = ({ tasks }: { tasks: Task[] }) => {
    return (
        <Menu>
            <MenuButton className='border-2 px-4 py-2 rounded flex items-center gap-2'>
                My Tasks <IconExpand />
            </MenuButton>
            <MenuItems anchor="bottom end" className="bg-white border divide-y rounded shadow" >
                {tasks.map(task => (
                    <MenuItem key={task.id} >
                        <NavLink to={task.id} className="block py-2 px-4  data-[focus]:bg-blue-100">
                            {task.name}
                        </NavLink>
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}

function TaskPage() {
    const { isLoading, tasks } = useTaskContext()
    const tasklist = tasks?.flatMap(task => task?.todos)

    return (
        <div className="pointer-events-auto relative flex max-h-[100%] h-full w-1/2 flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark pb-6" >
            <div className="flex flex-shrink-0 pl-20 items-center justify-between rounded-t-md px-8 pt-6 pb-[22px] gap-2">
                {tasks ? <Options tasks={tasks} /> : null}
                <CustomButton className="rounded px-4 h-10 text-white items-end" color="#2F80ED" >New Task</CustomButton>
            </div>
            <div className='relative overflow-y-auto px-8 pb-6'>
                {isLoading ? (
                    <Loading>Loading Tasks</Loading>
                ) : (
                    <div className='h-full relative bg-white flex flex-col divide-y'>
                        {tasklist?.length ? tasklist.map((group, i) => <ListBoxTask key={group.id} {...group} order={i} />) : null}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskPage;