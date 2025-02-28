"use client";

import { FormDataProps } from "@/types/type_form";
import React, { useState } from "react";

const InputNameArea: React.FC<FormDataProps> = (FormData) => {
    const [name, setName] = useState<string>("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        FormData.FormData.append("name", e.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={name}
                placeholder="氏名（やまだ たろう）"
                onChange={(e) => {
                    onChange(e);
                }}
                className=" w-full flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md  hover:bg-gray-100"
            />
        </>
    );
};

export default InputNameArea;
