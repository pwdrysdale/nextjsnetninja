import Head from "next/head"

export default function Home() {
    // Note that the lower level head tag overwrites the higher level head tag
    return (
        <>
            <Head>
                <title>WebDev News</title>
            </Head>
            <h1>Welcome</h1>
        </>
    )
}
