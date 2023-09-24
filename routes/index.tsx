import ConsoleWriter from "../islands/ConsoleWriter.tsx";
import { PageProps } from "https://deno.land/x/fresh@1.4.3/server.ts";

export default function Home({ url } : PageProps) {

  return (
  <div>
    <h1 className={"pt-[10%] text-center text-5xl opacity-100 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <h1 className={"pl-[10%] mt-[-4%] text-center text-5xl opacity-[75%] text-red-200 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <h1 className={"pl-[20%] mt-[-4%] text-center text-5xl opacity-[63%] text-green-300 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <h1 className={"pl-[30%] mt-[-4%] text-center text-5xl opacity-[42%] text-blue-400 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <h1 className={"pl-[40%] mt-[-4%] text-center text-5xl opacity-[24%] text-yellow-400 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <h1 className={"pl-[50%] mt-[-4%] text-center text-5xl opacity-[12%] text-purple-400 overflow-hidden whitespace-nowrap	"}>Jacob Stovall</h1>
    <div className={"text-center mt-[12%] text-2xl"}>
      Software Engineer Working at ASU. Formerly at:
      <ul>
        <li>SAP</li>
        <li>Microsoft</li>
        <li>American Express</li>
        <li>Transact Campus</li>
        <li>Offerpad</li>
        <li>Bluetail</li>
      </ul>
      <br />
      4.0 GPA - ASU in CS
      <br />
      <br />
      There's ways to find me.
      <ConsoleWriter domain={url.host} protocol={url.protocol} />
    </div>
  </div>);
}
