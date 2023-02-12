import { FC, ReactNode } from "react"
import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>The Ninjaz</title>
            </Head>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="grow">{children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout
