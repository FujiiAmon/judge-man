export async function GET(): Promise<Response> {
    const baseUrl = process.env.API_BASE_URL;
    console.log(baseUrl);
    const res = await fetch(`${baseUrl}/get_all_factors`);
    const data = await res.json();
    console.log(data);

    return new Response(JSON.stringify(data), { status: 200 });
}
