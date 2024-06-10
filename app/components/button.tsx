import { Button, ButtonProps } from "@headlessui/react";
import { Fragment, MouseEventHandler, PropsWithChildren, ReactNode, forwardRef, memo } from "react";

type Props = PropsWithChildren<{
    color: string,
    activeColor?: string
    activeChildren?: ReactNode | string | number
    className?: ButtonProps['className']
    onClick?: MouseEventHandler<HTMLButtonElement>
}>

const CustomButton = forwardRef<HTMLButtonElement, Props>(function Btn({ color, activeColor, activeChildren, children, className = '', onClick }, ref) {

    return (
        <Button as={Fragment}>
            {({ active }) => (
                <Button ref={ref} onClick={onClick} className={`flex justify-center items-center ${active ? `bg-[${activeColor || color}]` : `bg-[${color}]`} `.concat(typeof className === 'string' ? className : '')} >{active ? activeChildren || children : children}</Button>
            )}
        </Button>
    );
})

export default memo(CustomButton);
