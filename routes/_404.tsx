import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <div className={"font-['Oswald'] bg-black text-white h-screen"}>
      <h1 className={"pt-[25%] text-center"}>There's nothing else on this site. :)</h1>
    </div>
  );
}
