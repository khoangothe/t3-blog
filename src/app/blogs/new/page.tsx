'use client'

import {Suspense, useState} from "react";
import MDEditor, { ContextStore} from '@uiw/react-md-editor';
import { Section,  TextField, Text, Button} from "@radix-ui/themes";
import { useTheme } from "next-themes"
import { createPost } from "~/server/queries";
import  {Spinner}  from "@radix-ui/themes";

export default function App() {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTitle(value);
 };

 const handleContentChange = (value : string | undefined, e : React.ChangeEvent<HTMLTextAreaElement> | undefined, state?: ContextStore | undefined) => {
  const currentContent = value ? value : "";
  setContent(currentContent);
};

  const {theme} = useTheme();
  const defaultTheme: "light" | "dark"  = theme === 'light' ? theme : 'dark';
  const [content, setContent] = useState("**Your markdown content**");
  const [title, setTitle ] = useState("Title");

  return (
    <Section  className="">
      <div className="flex flex-col w-full max-w-6xl mx-auto">
      <Text>
        Title
      </Text>
      <TextField.Root     
        className="mb-5"
        radius="none" 
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        >

        </TextField.Root>
        <Text>
        Content
      </Text>
      <Suspense fallback={<Spinner />}>

        <MDEditor
          data-color-mode={defaultTheme}
          className="w-full h-full mx-auto "
          height={'20em'}
          preview="edit"
          overflow={true}
          value={content}
          enableScroll={true}
          onChange={handleContentChange}
        />
        </Suspense>
        <form className="w-full" action={createPost}>
          <input type="hidden" name="content" value={content} />
          <input type="hidden" name="title" value={title} />
          <Button className="w-full">Post</Button>
        </form>
      </div>
      

    </Section>
    

    );
}