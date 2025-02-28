"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputNameArea from "./InputNameArea";
import InputUrlArea from "./InputUrlArea";
import InputFileArea from "./InputFileArea";

const SubmitForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formData = new FormData();
    const apiUrl = process.env.NEXT_PUBLIC_API_HANDLE_URL + "/entry";
    const router = useRouter();

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("submit");
        try {
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
            <form
                action="#"
                className="max-w-lg mx-auto p-4 bg-white shadow-md rounded"
                onSubmit={onSubmitHandler}>
                <InputNameArea FormData={formData} />
                <InputFileArea FormData={formData} />
                <InputUrlArea FormData={formData} />
                <button
                    type="submit"
                    className="mt-4 w-full px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer hover:bg-blue-600 transition-colors duration-300"
                    disabled={isLoading}>
                    {isLoading ? "送信中..." : "提出する"}
                </button>
            </form>
        </>
    );
};

export default SubmitForm;
