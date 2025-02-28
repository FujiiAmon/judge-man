export async function GET(): Promise<Response> {
    const baseUrl = process.env.API_BASE_URL;
    const getUrl = `${baseUrl}/get_users_with_scores_and_factors_as_json`;
    const res = await fetch(getUrl);
    const data = await res.json();
    console.log("status:" + res.status);
    console.log("data:" + data);
    return new Response(JSON.stringify(data), { status: 200 });
}
