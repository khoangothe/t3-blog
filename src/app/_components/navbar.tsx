import Link from "next/link"
import { ModeToggle } from "./modetoggle"
import { PlusCircledIcon } from "@radix-ui/react-icons"

const routes = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Blogs",
        href: "/blogs"
    },
    {
        title: "Art",
        href: "/art"
    }
]

export default function NavBar(){
    return (
        <nav className="mt-0 w-full z-20 top-0 h-1/6 py-6 mb-32">
            <div className=" flex justify-around  items-center h-full">
                <div className="space-x-4  max-w-50 h-full flex items-center">
                    {routes.map((route, index) => (
                    <Link className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" key={route.title} href={route.href}>{route.title}</Link>
                    ))}
                </div>
                <div className="flex">
                <ModeToggle/>
                <Link href={"/blogs/new"}>
                    <PlusCircledIcon  className="h-full w-6 ml-4">

                    </PlusCircledIcon>
                </Link>
                </div>
            </div>
        </nav>
    )
}