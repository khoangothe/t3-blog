import {Container, Text} from "@radix-ui/themes";
import {api} from "~/trpc/server"


export default async function Page({params} : {params: {id : string}}){
    const post = await api.post.getPostWithId(
        {
            postId : params.id
        }
    )
    
    return (<main className="pt-40 mb-30 max-w-2xl mx-auto flex min-h-screen items-center flex-col">
            <Container>
            {post?.content}
            </Container>
        </main>)

    }
