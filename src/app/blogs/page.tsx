import { Grid } from "@radix-ui/themes";
import Post from "../_components/post";
import { api } from "~/trpc/server";
import { Suspense } from "react";
import PostSkeleton from "~/components/ui/post-skeleton";
import { Section } from "@radix-ui/themes";

export default async function Home() {
  const allPost = await api.metadata.getAll();

  const repeat = allPost.length / 3;
  console.log(repeat);

  return (
    <main>
      <Section className="flex min-h-screen flex-col items-center">
        <Grid
          className="justify-center"
          gap="3"
          columns={{ initial: "1", xs: "2", md: "3" }}
          rows={`repeat(${repeat}), 256px`}
        >
          {allPost?.map((post) => (
            <Suspense
              key={post.postId}
              fallback={<PostSkeleton id={post.postId} />}
            >
              <Post
                key={post.postId}
                image_url={post.imageUrl}
                title={post.title}
                href={`/blogs/${post.postId}`}
              />
            </Suspense>
          ))}
        </Grid>
      </Section>
    </main>
  );
}
