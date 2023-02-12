import { FC } from "react"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: { ninjas: data },
    }
}

interface AllNinjasProps {
    ninjas: {
        id: number
        name: string
        email: string
    }[]
}

const AllNinjas: FC<AllNinjasProps> = ({ ninjas }) => {
    return (
        <div className="container mx-auto">
            <h1 className="font-black">All Ninjas</h1>
            {ninjas.map((ninja) => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <div
                        key={ninja.id}
                        className="my-2 p-4 bg-slate-50 shadow-sm hover:bg-slate-200 border-l-4 border-transparent  hover:border-blue-500 box-border border-solid cursor-pointer rounded-sm"
                    >
                        <h1 className="font-bold">{ninja.name}</h1>
                        <p>{ninja.email}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllNinjas
