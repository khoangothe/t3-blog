import Link from "next/link";
import { ModeToggle } from "./modetoggle";
import { PlusCircledIcon } from "@radix-ui/react-icons";

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
    href: "/blogs",
  },
  {
    title: "Art",
    href: "/art",
  },
];

export default function NavBar() {
  return (
    <nav className="top-0 z-20 mb-32 mt-0 h-1/6 w-full py-6">
      <div className="flex h-full items-center justify-around">
        <div className="max-w-50 flex h-full items-center space-x-4">
          {routes.map((route, index) => (
            <Link
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              key={route.title}
              href={route.href}
            >
              {route.title}
            </Link>
          ))}
        </div>
        <div className="flex">
          <ModeToggle />
          <Link href={"/blogs/new"}>
            <PlusCircledIcon className="ml-4 h-full w-6"></PlusCircledIcon>
          </Link>
        </div>
      </div>
    </nav>
  );
}
