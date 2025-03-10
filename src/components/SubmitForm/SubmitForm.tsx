"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputNameArea from "./InputNameArea";
import InputUrlArea from "./InputUrlArea";
import InputFileArea from "./InputFileArea";

const SubmitForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formData = new FormData();
    const router = useRouter();

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log("クライアント側デバック");
            console.log("バックエンド側デバック");
            const names = formData.getAll("name");
            console.log(names[names.length - 1]);
            console.log(formData.get("file"));
            const urls = formData.getAll("url");
            console.log(urls[urls.length - 1]);
            console.log(formData.get("url"));
            const response = await fetch("http://localhost:3000/api/entry", {
                method: "POST",
                body: formData,
            });
            console.log(response);
            router.push("/entry/thanks");
        } catch (error) {
            console.log("アップロードに失敗しました" + error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="p-8 flex flex-col items-center justify-center">
                <form
                    action="#"
                    className="w-full m-auto p-4 bg-white shadow-md rounded"
                    onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-1 gap-4">
                        <InputNameArea FormData={formData} />
                        <InputFileArea FormData={formData} />
                        <InputUrlArea FormData={formData} />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                        disabled={isLoading}>
                        {isLoading ? "送信中..." : "提出する"}
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubmitForm;
