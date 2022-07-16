/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function NavBar(){
    return(
        <div class={tw`grid grid-cols-3 bg-babyblue h-40 text-raisinblack`}>
            <a class={tw`self-end`} href="/"><img class={tw`w-32`} src="/myself.png" alt="Illustrated Image of Jacob Stovall" /></a>
            <ul class={tw`col-span-2 justify-self-end grid grid-rows-3 mr-5`}>
                <li class={tw`text-lg self-center justify-self-end text-align-right font-bold`}><a href="/blog">Blog</a></li>
                <li class={tw`self-center justify-self-end`}><a href="/"><img src="/email.svg" alt="Email Icon" /></a></li>
                <li class={tw`self-center justify-self-end`}><a href="https://www.linkedin.com/in/jacob-stovall-14b2a093"><img style="width:24px" src="/linkedin.svg" alt="LinkedIn Logo Icon" /></a></li>
            </ul>
        </div>
    )
}