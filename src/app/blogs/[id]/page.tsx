import { Container, Text } from "@radix-ui/themes";
import { api } from "~/trpc/server";
import markdownToHtml from "~/lib/markdownToHtml";
import Head from "next/head";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await api.post.getPostWithId({
    postId: params.id,
  });
  console.log("Hello");
  const htmlcontent = await markdownToHtml(post?.content || "");

  return (
    <main className="mb-30 mx-auto flex min-h-screen max-w-2xl flex-col items-center">
      <Container>
        <Head>
          <title>{post?.title} | My awesome blog</title>
        </Head>

        {false ? (
          <div>Loading…</div>
        ) : (
          <div>
            <article>
              <header>
                <h1 className="text-4xl font-bold">{post?.title}</h1>

                <time className="mt-2 flex text-gray-400"></time>
              </header>

              <div
                className="prose mt-10"
                dangerouslySetInnerHTML={{ __html: htmlcontent }}
              />
            </article>
          </div>
        )}
      </Container>
    </main>
  );
}
