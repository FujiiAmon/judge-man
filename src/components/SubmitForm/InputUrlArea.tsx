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
        <div className="flex flex-col items-center justify-center p-4">
            <input
                type="text"
                value={url}
                placeholder="ポートフォリオのurlがある場合は入力してください"
                onChange={(e) => {
                    onChange(e);
                }}
                className="border border-gray-300 rounded-md p-2 w-full max-w-md"
            />
        </div>
    );
};

export default InputUrlArea;
