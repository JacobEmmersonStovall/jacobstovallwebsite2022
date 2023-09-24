import { Handlers } from "https://deno.land/x/fresh@1.4.3/server.ts";

const kv = await Deno.openKv();

interface Result {
    successful: boolean;
    value: string;
}

interface Contact {
    value: string;
}

export const handler: Handlers = {
    async GET(_req, ctx) {
        console.log(_req.url);
        const id = ctx.params.id;
        const key = ["contact", id];
        const contact = (await kv.get<Contact>(key)).value;
        const resp : Result = { successful: false, value: "Not a valid contact command" };
        if(contact != null)
        {
            resp.successful = true;
            resp.value = contact.value;
        }
        return new Response(JSON.stringify(resp));
    }
}