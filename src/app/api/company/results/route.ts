export async function GET(): Promise<Response> {
    const baseUrl = process.env.API_BASE_URL;
    const getUrl = `${baseUrl}/get_users_with_scores_and_factors_as_json`;
    const response = await fetch(getUrl);
    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data), { status: 200 });
}
