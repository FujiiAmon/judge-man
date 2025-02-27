"use client";

import React, { useEffect, useState } from "react";
import { Factor } from "@/types/type_company";

const ParamPage = () => {
    const [factors, setFactors] = useState<Factor[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/company`);
                const data = await res.json();
                setFactors(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
        // console.log("factors:", factors);
    }, []);

    const handleChange = (id: number, field: string, value: any) => {
        setFactors((prevFactors) =>
            prevFactors.map((factor) =>
                factor.id === id ? { ...factor, [field]: value } : factor
            )
        );
    };

    return (
        <>
            {factors.map((factor) => (
                <div
                    key={factor.id}
                    className="m-4 p-4 border rounded-lg shadow-sm">
                    <label className="block mb-2">
                        評価項目
                        <input
                            type="text"
                            value={factor.title}
                            onChange={(e) =>
                                handleChange(factor.id, "title", e.target.value)
                            }
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                    </label>
                    <label className="block mb-2">
                        詳細
                        <input
                            type="text"
                            value={factor.content}
                            onChange={(e) =>
                                handleChange(
                                    factor.id,
                                    "content",
                                    e.target.value
                                )
                            }
                            className="mt-1 block w-full p-2 border rounded-md"
                        />
                    </label>
                    <label className="block mb-2">
                        比重{factor.weight}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={factor.weight}
                            onChange={(e) =>
                                handleChange(
                                    factor.id,
                                    "weight",
                                    parseFloat(e.target.value)
                                )
                            }
                            className="mt-1 block w-full"
                        />
                    </label>
                </div>
            ))}
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={() => console.log("Updated factors:", factors)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    更新する
                </button>
                <button
                    onClick={() => console.log("戻る")}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md">
                    戻る
                </button>
            </div>
        </>
    );
};

export default ParamPage;
