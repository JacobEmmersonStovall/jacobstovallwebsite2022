import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ConsoleWriter(props: any){
    if(!IS_BROWSER) { return <div></div> }
    return (<div>
        <div></div>
        {console.log("So you want to find me?")}
        {console.log("Enter a contact() command to try and contact me")}
        {globalThis.contact = async function(cmd : string){
            const resp = await fetch(props.protocol + "//" + props.domain + "/api/contact/" + cmd);
            const json = await resp.json();
            console.log(json);
        }}
    </div>)
}