import { HydrateClient } from "~/trpc/server";
import { Flex, Text, Button } from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';


export default async function Home() {

  return (  
    <HydrateClient>
      <main className="flex min-h-screen items-center justify-center flex-col text-black">
      <Flex gap="3" align="center">
        <Button variant="classic">
         Get started <ArrowRightIcon />
      </Button>
      <Button variant="solid">
        Get started <ArrowRightIcon />
      </Button>
      <Button variant="soft">
        Get started <ArrowRightIcon />
      </Button>
    </Flex>
      </main>
    </HydrateClient>
  );
}
