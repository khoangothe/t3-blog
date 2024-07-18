'use server'

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { redirect } from 'next/navigation';


export async function createPost(contentData: FormData ) {
    let title = contentData.get("title") as string | null ?? "";
    let content = contentData.get("content") as string | null ?? "";
    console.log("Start")

    const newPost = await  db.post.create({
        data:{
            title: title,
            authorId: "Khoa Ngo The",
            content: content
        }
    })

    const newMetaData = await db.postMetaData.create({
        data:{
            postId: newPost.postId,
            authorId: "Khoa Ngo The",
            title: title,
            imageUrl: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?&auto=format&fit=crop&w=300&q=90"
        }
    })
    console.log("Done")
    revalidatePath("/")
    redirect(`/blogs/${newPost.postId}`)
}