import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET() {
        return Response.redirect("https://leetcode.com/tanishq-singh-2407");
    },
};
