import Link from "next/link"
import Container from "./container"
import { ModeToggle } from "./modetoggle"

const routes = [
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
        <nav className="mt-0 fixed w-full z-10 top-0 h-1/6 py-6">
            <div className=" flex justify-around  items-center h-full">
                <div className="space-x-4  max-w-3xl h-full flex items-center">
                    {routes.map((route, index) => (
                    <Link key={route.title} href={route.href}>{route.title}</Link>
                    ))}
                </div>
                <ModeToggle/>

            </div>
        </nav>
    )
}