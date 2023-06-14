/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { marky } from "marky";
import { Head } from "$fresh/runtime.ts";
import { DOMParser } from "denodom";

// Islands
import NavBar from "../../islands/NavBar.tsx";

interface Post {
    title: string;
    postDate: string;
    markdownPath: string;
    description: string;
    content: string | undefined;
}

export const handler: Handlers<string | null> = {
    async GET(_, ctx) {
            const posts = await Deno.readTextFile(Deno.cwd() + "/static/blog/index.json");
            const postList: Post[] = JSON.parse(posts);
            
            const { title } = ctx.params;
            const matchingPath = postList.filter((ele) => ele.markdownPath == title);

            if(matchingPath.length < 1){
                return ctx.render(null);
            }

            matchingPath[0].content = await Deno.readTextFile(Deno.cwd() + "/static/blog/" + matchingPath[0].markdownPath + ".md");
            return ctx.render(matchingPath[0]);
    }
}

export default function BlogPostPage({ data }: PageProps<Post | null>){
    if(!data){
        return (<h1>Page not found!</h1>);
    }

    var markdownContentHtmlString : string = marky(data.content);
    
    // Injecting stylings into html since I don't think parser has an option to
    markdownContentHtmlString = markdownContentHtmlString.replaceAll("<p", "<p class='text-md mb-5'");
    markdownContentHtmlString = markdownContentHtmlString.replaceAll("<ul", "<ul class='list-disc ml-8 mb-5'");
    markdownContentHtmlString = markdownContentHtmlString.replaceAll("<a", "<a class='font-bold'");
    
    // Bottom paragraph is there to force styles used in markdown
    return (
        <body class={tw`text-white bg-raisinblack font-mono`}>
            <header>
                <NavBar />
            </header>
            
            <main class={tw`w-2/3 m-auto`}>
                <h1 class={tw`text-5xl text-center mb-4`}>{ data.title }</h1>
                <h2 class={tw`text-3xl text-center mb-4`}>{ data.postDate }</h2>
                <p class={tw`italic mb-4`}>{ data.description }</p>
                <div dangerouslySetInnerHTML={{ __html: markdownContentHtmlString }} ></div>
            </main>
            
            <p style="display: none" class={tw`text-md list-disc ml-8 mb-5 font-bold`}></p>
            <Head>
                <title>{data.title} | Jacob Stovall - Software Engineer</title>
                <meta name="description" content={data.description} />
            </Head>
        </body>
        
    );
}