import { NextRequest } from "next/server";

export async function GET(): Promise<Response> {
    const baseUrl = process.env.API_BASE_URL;
    const getUrl = `${baseUrl}/get_all_factors`;
    const res = await fetch(getUrl);
    const data = await res.json();

    console.log("status:" + res.status);
    console.log("data:" + data);

    return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req: NextRequest): Promise<Response> {
    const body = await req.json();
    console.log("body:", body);
    const baseUrl = process.env.API_BASE_URL;
    const upsertUrl = `${baseUrl}/upsert_factor`;
    const upsertRes = await fetch(upsertUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!upsertRes.ok) {
        return new Response(JSON.stringify({ error: "Failed to upsert" }), {
            status: 500,
        });
    }

    console.log("status" + upsertRes.status);

    const upsertData = await upsertRes.json();
    return new Response(JSON.stringify(upsertData), { status: 200 });
}
