export function IconQuicks({ fill }: { fill?: string }) {
    return (
        <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z" fill={fill || 'white'} />
        </svg>
    )
}

export function IconInbox({ fill }: { fill?: string }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.4443 3.11066H3.99984C3.38873 3.11066 2.88873 3.61066 2.88873 4.22177V19.7773L7.33318 15.3329H18.4443C19.0554 15.3329 19.5554 14.8329 19.5554 14.2218V4.22177C19.5554 3.61066 19.0554 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41097L5.75541 13.7661L5.11097 14.4106V5.3328H17.3332ZM21.7776 7.55512H23.9998C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6665 20.8885H8.44429C7.83317 20.8885 7.33317 20.3885 7.33317 19.7773V17.5551H21.7776V7.55512Z" fill={fill || 'white'} />
        </svg>
    )
}

export function IconTask({ fill }: { fill?: string }) {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.11117 4.66669H24.1112C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1112 23.5556H4.11117C2.88895 23.5556 1.88895 22.5556 1.88895 21.3334V6.88891C1.88895 5.66669 2.88895 4.66669 4.11117 4.66669ZM4.11117 6.88891V21.3334H13.0001V6.88891H4.11117ZM24.1112 21.3334H15.2223V6.88891H24.1112V21.3334ZM23.0001 10.7778H16.3334V12.4445H23.0001V10.7778ZM16.3334 13.5556H23.0001V15.2222H16.3334V13.5556ZM23.0001 16.3334H16.3334V18H23.0001V16.3334Z" fill={fill || 'white'} />
        </svg>
    )
}

export function IconAvatar({ fill, bg }: { fill?: string, bg?: string }) {
    return (
        <div className={`h-[34px] w-[34px] rounded-full flex justify-center items-center ${bg || ''}`} >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill={fill || "white"} />
            </svg>
        </div>

    )
}

export function IconKebab() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="more_horiz_24px">
                <path id="icon/navigation/more_horiz_24px" fillRule="evenodd" clipRule="evenodd" d="M4.00008 6.66666C3.26675 6.66666 2.66675 7.26666 2.66675 8C2.66675 8.73333 3.26675 9.33333 4.00008 9.33333C4.73341 9.33333 5.33342 8.73333 5.33342 8C5.33342 7.26666 4.73341 6.66666 4.00008 6.66666ZM12.0001 6.66666C11.2667 6.66666 10.6667 7.26666 10.6667 8C10.6667 8.73333 11.2667 9.33333 12.0001 9.33333C12.7334 9.33333 13.3334 8.73333 13.3334 8C13.3334 7.26666 12.7334 6.66666 12.0001 6.66666ZM6.66675 8C6.66675 7.26666 7.26675 6.66666 8.00008 6.66666C8.73341 6.66666 9.33341 7.26666 9.33341 8C9.33341 8.73333 8.73341 9.33333 8.00008 9.33333C7.26675 9.33333 6.66675 8.73333 6.66675 8Z" fill="#4F4F4F" />
            </g>
        </svg>
    )
}

export function IconClose() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333" />
        </svg>
    )
}

export function IconPencil() {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2165 0.00012207C12.0082 0.00012207 11.7915 0.0834554 11.6332 0.241789L10.1082 1.76679L13.2332 4.89179L14.7582 3.36679C15.0832 3.04179 15.0832 2.51679 14.7582 2.19179L12.8082 0.241789C12.6415 0.0751221 12.4332 0.00012207 12.2165 0.00012207ZM9.21667 5.01679L9.98333 5.78346L2.43333 13.3335H1.66667V12.5668L9.21667 5.01679ZM0 11.8751L9.21667 2.65846L12.3417 5.78346L3.125 15.0001H0V11.8751Z" fill="#2F80ED" />
        </svg>
    )
}

export function IconClock() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="schedule_24px">
                <path id="icon/action/schedule_24px" fillRule="evenodd" clipRule="evenodd" d="M9.99181 1.66669C5.39181 1.66669 1.66681 5.40002 1.66681 10C1.66681 14.6 5.39181 18.3334 9.99181 18.3334C14.6001 18.3334 18.3335 14.6 18.3335 10C18.3335 5.40002 14.6001 1.66669 9.99181 1.66669ZM10.0003 16.6667C6.31697 16.6667 3.33364 13.6834 3.33364 10C3.33364 6.31669 6.31697 3.33335 10.0003 3.33335C13.6836 3.33335 16.667 6.31669 16.667 10C16.667 13.6834 13.6836 16.6667 10.0003 16.6667ZM9.16681 5.83335H10.4168V10.2084L14.1668 12.4334L13.5418 13.4584L9.16681 10.8334V5.83335Z" fill="#2F80ED" />
            </g>
        </svg>

    )
}

export function IconExpand() {
    return (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5981 6.91248L10.7731 10.7291L6.94807 6.91248L5.77307 8.08748L10.7731 13.0875L15.7731 8.08748L14.5981 6.91248Z" fill="#4F4F4F" />
        </svg>
    )
}

export function IconArrowRight() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#333333" />
        </svg>
    )
}

export function Spinner() {
    return (
        <svg className="h-6 w-6 animate-spin" viewBox="0 0 100 100">
            <circle
                fill="none"
                strokeWidth="10"
                className="stroke-current opacity-40"
                cx="50"
                cy="50"
                r="40"
            />
            <circle
                fill="none"
                strokeWidth="10"
                className="stroke-current"
                strokeDasharray="250"
                strokeDashoffset="210"
                cx="50"
                cy="50"
                r="40"
            />
        </svg>

    )
}