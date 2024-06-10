import Quicks from "./quicks";
import { PropsWithChildren } from "react";

export default function QuicksLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex h-screen w-full flex-col gap-6 justify-end items-end p-12">
            {children}
            <div className="flex gap-8 flex-row-reverse">
                <Quicks />
            </div>
        </div>
    )
}