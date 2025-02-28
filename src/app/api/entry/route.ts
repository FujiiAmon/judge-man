import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const formData = await req.formData();
    const baseUrl = process.env.API_BASE_URL;
    console.log("バックエンド側デバック");
    const names = formData.getAll("name");
    console.log(names[names.length - 1]);
    console.log(formData.get("file"));
    const urls = formData.getAll("url");
    console.log(urls[urls.length - 1]);
    try {
        const response = await fetch(`${baseUrl}/upload_pdf_and_save_user`, {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            console.log("status:" + response.status);
            throw new Error("アップロードに失敗しました");
        }
        const data = await response.json();
        const pdfUrl = `${baseUrl}${data.pdf_url}`;
        console.log("status:" + response.status);
        console.log("pdfUrl" + pdfUrl);
        return NextResponse.json({ pdfUrl });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            {
                error:
                    err instanceof Error ? err.message : "エラーが発生しました",
            },
            {
                status: 500,
            }
        );
    }
}
