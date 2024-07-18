import {Grid} from '@radix-ui/themes';
import Post from "./_components/post";
import {api} from "~/trpc/server";
import { Suspense } from "react";
import PostSkeleton from "~/components/ui/post-skeleton";
import {Section, Container} from '@radix-ui/themes';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

export default async function Home() {

  const allPost = await api.metadata.getAll();
  
  const repeat = allPost.length / 3;

  return (  

      <main>        
        <Section className='pt-40 flex min-h-screen items-center flex-col'>
        <Grid className='flex justify-center w-full' gap='3' columns={{ initial: '1', xs: '2', md: '3' }} rows={`repeat(${repeat})`} width="auto">
          {allPost?.map((post)=>(
            <Suspense key={post.postId} fallback={<PostSkeleton id={post.postId}/>}>
              <Post key={post.postId} image_url={post.imageUrl} title={post.title} href={`/blogs/${post.postId}`}/>
            </Suspense>
          ))}
        </Grid>
      </Section>
      </main>
  );
}
