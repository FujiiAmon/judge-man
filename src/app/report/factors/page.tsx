"use client";

import React, { useEffect, useState } from "react";
import { Factor } from "@/types/type_results";

const ParamPage = () => {
    const [factors, setFactors] = useState<Factor[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://localhost:3000/api/company`);
                const data = await res.json();
                setFactors(data);
                console.log("factors:" + data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
        console.log("factors:", factors);
    });

    const handleChange = (
        id: number,
        field: string,
        value: string | number
    ) => {
        setFactors((prevFactors) =>
            prevFactors.map((factor) =>
                factor.id === id ? { ...factor, [field]: value } : factor
            )
        );
    };

    const handleUpdate = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:3000/api/company`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(factors[id - 1]),
            });
            console.log(res.status);
        } catch (e) {
            console.error(e);
        }
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
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                console.log(factor.id);
                                handleUpdate(factor.id);
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            更新する
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ParamPage;
