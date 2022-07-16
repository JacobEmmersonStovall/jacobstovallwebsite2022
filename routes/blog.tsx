/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

// Islands
import NavBar from "../islands/NavBar.tsx";

export default function BlogIndexPage(){
    return (
        <main class={tw`text-white bg-carnelian font-mono`}>
            <NavBar />
            <h1>Blog Page</h1>
        </main>
    );
}