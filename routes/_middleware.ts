import { MiddlewareHandlerContext } from "$fresh/server.ts";
import connect from "$db/connect.ts";

export const handler = async (_req: Request, ctx: MiddlewareHandlerContext) => {
    const client = connect();
    if (typeof client !== "string")
        await client.queryObject<{ value: number }>("UPDATE stats SET value = VALUE + 1 where id ='dd3f04a5-4b5f-4981-857c-49539ae5d808'");

    const resp = await ctx.next();

    return resp;
}
