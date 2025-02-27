"use client";

import React, { useState } from "react";

const PdfUpload = () => {
    const [name, setName] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!name || !file) {
            setError("名前とPDFファイルを選択してください");
            return;
        }

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("name", name); // `name` を `FormData` で送信
        formData.append("file", file);
        const baseUrl =
            "https://handles-organised-elephant-involves.trycloudflare.com/";

        try {
            const response = await fetch(`${baseUrl}upload_pdf_and_save_user`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("アップロードに失敗しました");
            }

            const data = await response.json();

            if (!baseUrl) {
                throw new Error("BaseURL が設定されていません");
            }

            const pdfUrl = `${baseUrl}${data.pdf_url}`;

            setPdfUrl(pdfUrl); // PDF URL を状態に設定
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "エラーが発生しました"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>PDF ファイルのアップロード</h1>

            <input
                type="text"
                placeholder="名前を入力"
                value={name}
                onChange={handleNameChange}
            />
            <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
            />

            <button onClick={handleUpload} disabled={loading}>
                {loading ? "アップロード中..." : "アップロード"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {pdfUrl && (
                <div>
                    <p>アップロードされたPDFを確認できます：</p>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        PDFを表示
                    </a>
                </div>
            )}
        </div>
    );
};

export default PdfUpload;
