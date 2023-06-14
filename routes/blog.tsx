/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";


// Islands
import NavBar from "../islands/NavBar.tsx";

interface Post {
    title: string;
    postDate: string;
    markdownPath: string;
    description: string;
}

export const handler: Handlers<Post[]> = {
    async GET(_, ctx) {
        const resp = await Deno.readTextFile(Deno.cwd() + "/static/blog/index.json");
        const postList: Post[] = JSON.parse(resp);
        return ctx.render(postList);
    }
}

function BlogEntry(props: { entry: Post }){
    var url = "/blog/" + props.entry.markdownPath
    return (<div class={tw`mb-10`}>
        <a href={url}><h2 class={tw`text-3xl`}>{ props.entry.title }</h2></a>
        <h3>{ props.entry.postDate }</h3>
        <p>{ props.entry.description }</p>
    </div>)
}

export default function BlogIndexPage({ data }: PageProps<Post[]>){
    return (
        <body class={tw`text-white bg-raisinblack font-mono`}>
            <header>
                <NavBar />
            </header>
            <main class={tw`w-2/3 m-auto`}>
                <h1 class={tw`text-5xl text-center mb-4`}>Blog</h1>
                { data.map(post => <BlogEntry entry={post} />) }
            </main>
            <Head>
                <title>Blog | Jacob Stovall - Software Engineer</title>
                <meta name="description" content="A blog with some thoughts about software engineering and various other topics." />
            </Head>
        </body>
        
    );
}