
import cn from "classnames";
import  {Spinner}  from "@radix-ui/themes";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (<main className="pt-40 mb-30 max-w-2xl mx-auto flex min-h-screen items-center flex-col">
        <Spinner/>
    </main>) 
  }