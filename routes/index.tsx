/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

// Islands
import NavBar from "../islands/NavBar.tsx";
import EmploymentHistory, { Employment } from "../islands/EmploymentHistory.tsx"

export const handler: Handlers<Employment[]> = {
    async GET(_, ctx) {
        const resp = await Deno.readTextFile(Deno.cwd() + "/static/jobs.json");
        const employmentHistory: Employment[] = JSON.parse(resp);
        return ctx.render(employmentHistory);
    }
}

export default function HomePage({ data }: PageProps<Employment[]>) {
    return (
        <body class={tw`text-white bg-raisinblack font-mono`}>
            <header>
                <NavBar />
            </header>
            <main>
                <div class={tw`w-5/6 m-auto`}>
                    <h1 class={tw`text-5xl text-center mb-4`} >Jacob Stovall</h1>
                    <EmploymentHistory history={data} />

                    <Head>
                        <title>Jacob Stovall - Software Engineer</title>
                        <meta name="description" content="Jacob Stovall is Software Engineer based out of Chandler, Arizona with Work Experience at SAP, Offerpad, AMEX, and Microsoft." />
                    </Head>
                </div>
            </main>
        </body>
    );
}