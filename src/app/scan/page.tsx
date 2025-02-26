"use client";

import React, { useState } from "react";

const Scan = () => {
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
            style={{
                border: "2px dashed #ccc",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center",
            }}>
            <p>Drag & Drop PDF files here</p>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>
                        {file.name}
                        <object
                            data={URL.createObjectURL(file)}
                            type="application/pdf"
                            width="100%"
                            height="500px">
                            <p>PDF cannot be displayed</p>
                        </object>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Scan;
