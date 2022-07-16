/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

// Islands
import NavBar from "../islands/NavBar.tsx";

export default function HomePage() {
    return (
        <main class={tw`text-white bg-carnelian font-mono`}>
            <NavBar />
            <h1 class={tw`text-5xl`} >Hello World!</h1>
            <Head>
                <title>Jacob Stovall - Software Engineer</title>
                <meta name="description" content="Jacob Stovall is Software Engineer based out of Chandler, Arizona with Work Experience at SAP, Offerpad, AMEX, and Microsoft." />
            </Head>
        </main>
    );
}