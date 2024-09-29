import { Skeleton } from "./skeleton";

export default function PostSkeleton({ id }: { id: string }) {
  return <Skeleton id={id} className="h-[256] w-[256px] rounded-xl" />;
}
