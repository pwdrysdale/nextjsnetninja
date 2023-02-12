import { FC } from "react"

import { INinja } from "@/interfaces"

// tells nextjs which pages to pre-render / build - here looking at the id property
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map((ninja: INinja) => {
        return {
            params: { id: ninja.id.toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

// gets the data
export const getStaticProps = async (context: any) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { ninja: data },
    }
}

interface DetailsProps {
    ninja: INinja
}

const Details: FC<DetailsProps> = ({ ninja }) => {
    return (
        <div className="container mx-auto">
            <h1>Details Page</h1>
            <h3 className="font-bold">{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}

export default Details
