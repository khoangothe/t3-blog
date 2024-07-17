import {Grid} from '@radix-ui/themes';
import Post from "./_components/post";
import {api} from "~/trpc/server";
import { Suspense } from "react";
import PostSkeleton from "~/components/ui/post-skeleton";
import {Container} from '@radix-ui/themes';


export default async function Home() {

  const allPost = await api.metadata.getAll();
  
  const repeat = allPost.length / 3;

  return (  
      <main className="pt-40 flex min-h-screen items-center flex-col">
      <Container>
      <Grid columns={{ initial: '1', xs: '2', md: '3' }} gap="5" rows={`repeat(${repeat})`} width="auto">
        {allPost?.map((post)=>(
          <Suspense key={post.postId} fallback={<PostSkeleton id={post.postId}/>}>
            <Post key={post.postId} image_url={post.imageUrl} title={post.title} href={`/blogs/${post.postId}`}/>
          </Suspense>
        ))}
      </Grid>
      </Container>
      </main>
  );
}
