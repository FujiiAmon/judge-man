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

    const handleUpload = async (e: React.FormEvent) => {
        if (!name || !file) {
            setError("名前とPDFファイルを選択してください");
            return;
        }

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        const apiUrl = "http://localhost:3000/api/up_user";
        const onSubmitHandler = async (e: React.FormEvent) => {
            e.preventDefault();
            formData.get("name");
            formData.get("file");
            try {
                const response = await fetch(apiUrl, {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                setPdfUrl(data.pdfUrl);
            } catch (error) {
                setError("アップロードに失敗しました" + error);
            } finally {
                setLoading(false);
            }
        };

        onSubmitHandler(e);
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
