import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main className="padding mt-4 md:mt-8">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
