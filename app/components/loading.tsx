import { PropsWithChildren } from "react";
import { Spinner } from "./icons";

export default function Loading(props: PropsWithChildren<{ label?: string }>) {
    
    return (
        <div className="h-full w-full flex-col flex-grow flex justify-center items-center">
            <Spinner />
            { props.label }
        </div>
    )
}