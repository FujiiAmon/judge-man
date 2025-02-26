"use client";

import React, { useState } from "react";

const DropArea = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files).filter(
            (file) => file.type === "application/pdf"
        );
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-100 transition-colors duration-300 m-4 h-[60vh]"
            onDragEnter={(e) =>
                (e.currentTarget.className =
                    "border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-300 transition-colors duration-300 m-4 h-[60vh]")
            }
            onDragLeave={(e) =>
                (e.currentTarget.className =
                    "border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-100 transition-colors duration-300 m-4 h-[60vh]")
            }>
            {files.length === 0 ? (
                <p className="text-lg text-gray-800">
                    Drag & Drop PDF files here
                </p>
            ) : (
                <ul className="list-none p-0 h-full">
                    {files.map((file, index) => (
                        <li key={index} className="my-2">
                            <p className="my-1 font-bold">{file.name}</p>
                            <object
                                data={URL.createObjectURL(file)}
                                type="application/pdf"
                                className="border border-gray-300 rounded-md object-contain w-full h-full">
                                <p>PDF cannot be displayed</p>
                            </object>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropArea;
