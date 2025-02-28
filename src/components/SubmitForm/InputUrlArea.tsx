"use client";

import { FormDataProps } from "@/types/type_form";
import React, { useState } from "react";

const InputUrlArea: React.FC<FormDataProps> = (FormData) => {
    const [url, setUrl] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        FormData.FormData.append("url", e.target.value);
        setUrl(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={url}
                placeholder="ポートフォリオのurlがある場合は入力してください"
                onChange={(e) => {
                    onChange(e);
                }}
                className=" w-full flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md  hover:bg-gray-100"
            />
        </>
    );
};

export default InputUrlArea;
