"use client";

import { FormDataProps } from "@/types/type_form";
import React from "react";

const InputFileArea: React.FC<FormDataProps> = ({ FormData }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            FormData.append("file", e.target.files[0]);
        }
    };

    return (
        <>
            <label
                htmlFor="input_file"
                className=" w-full flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md  hover:bg-gray-100">
                <span className="text-gray-700 ">ファイルを選択</span>
                <input
                    id="input_file"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </label>
            {FormData.get("file") && (
                <div>
                    <div className="w-full h-64 flex items-center justify-center">
                        <p className="text-gray-500">Loading...</p>
                    </div>
                    <object
                        data={URL.createObjectURL(FormData.get("file") as Blob)}
                        type="application/pdf"
                        width="100%"
                        height="500px"
                        className="border border-gray-300 rounded-md">
                        <p className="text-center text-gray-500">
                            PDF preview is not available.
                        </p>
                    </object>
                </div>
            )}
        </>
    );
};

export default InputFileArea;
