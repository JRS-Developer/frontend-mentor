import { ReactNode } from "react"

const Button = ({ children, extraClass = false }: { children: ReactNode, extraClass?: string | boolean }) => {
    return (
        <button className={`bg-green-500 rounded-full px-4 py-2 text-white ${extraClass ? extraClass : null}`}>
            {children}
        </button>
    )
}


export default Button
