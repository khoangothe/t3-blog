"use client";

import { Flex, Text, Button, Grid, Box } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Post({
  image_url,
  href,
  title,
}: {
  image_url: string;
  href: string;
  title: string;
}) {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box
      width="256px"
      height="256px"
      className="cursor-pointer"
      onClick={() => handleClick(href)}
    >
      <img className="h-full w-full object-cover" src={image_url} alt={title} />
    </Box>
  );
}
