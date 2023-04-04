import { HandlerContext } from "$fresh/server.ts";
import connect from "$db/connect.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
    const url = new URL(_req.url);
    const source = url.searchParams.get("source") || "";
    const textColor = url.searchParams.get("text-color") || "white";
    let views: number | null = null;

    try {
        const client = connect();
        if (typeof client === "string") throw new Error(client);

        switch (source.toLowerCase()) {
            case "readme":
                views = (await client.queryObject<{value: number}>("UPDATE stats SET value = VALUE + 1 where id ='b34c5260-6496-4068-a139-33fcf37a7840' RETURNING value")).rows[0].value;
                break;
    
            case "folio":
                views = (await client.queryObject<{value: number}>("UPDATE stats SET value = VALUE + 1 where id ='dd3f04a5-4b5f-4981-857c-49539ae5d808' RETURNING value")).rows[0].value;
                break;
        
            default:
                console.log(_req)
                break;
        }
    
        const svg = `
            <svg 
                height="12" 
                width="200" 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1"
            >
                <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="${textColor}"
                    style="font-family:sans-serif; font-size:12px; font-weight:bold;"
                >
                    Profile Views: ${views}
                </text>
            </svg>
        `;

        return new Response(svg, {
            headers: {
                'Content-Type': 'image/svg+xml'
            }
        });
    } catch (error) {
        const { message } = error as Error;
        return new Response(message, { status: 400 });
    }
};
