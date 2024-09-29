import cn from "classnames";
import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="mb-30 mx-auto flex min-h-screen max-w-2xl flex-col items-center pt-40">
      <Spinner />
    </main>
  );
}
