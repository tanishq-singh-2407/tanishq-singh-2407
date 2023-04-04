import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
    data: string;
}

export const handler = async (_req: Request, ctx: MiddlewareHandlerContext<State>) => {
    const resp = await ctx.next();
    resp.headers.set("server", "fresh server");

    return resp;
}
