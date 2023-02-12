import Link from "next/link"
import Image from "next/image"

interface INavItem {
    to: string
    text: string
}

const navItems: INavItem[] = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/ninjas", text: "Ninjas" },
]

const Navbar = () => {
    return (
        <nav className="bg-red-400 grid grid-cols-2 text-white p-6">
            <Link href="/">
                <div className="flex gap-5">
                    <Image
                        src="/next.svg"
                        alt="Ninjas"
                        width={70}
                        height={70}
                    />
                    <h1 className=" font-black  ">Ninjas</h1>
                </div>
            </Link>
            <div className="flex justify-end w-full gap-4">
                {navItems.map((item: INavItem) => (
                    <Link
                        href={item.to}
                        className="hover:text-gray-300"
                        key={item.to}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
