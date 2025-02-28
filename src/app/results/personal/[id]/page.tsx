"use client";

import { Result } from "@/types/type_results";
import React, { useEffect, useState } from "react";

const PersonalPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const [id, setId] = useState<string | null>(null);
    const [results, setResults] = useState<Result[] | []>([]);
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        params.then((resolvedParams) => {
            setId(resolvedParams.id);
            console.log("id:" + resolvedParams.id);
        });
    }, [params]);

    useEffect(() => {
        if (id) {
            console.log("setId:" + id);
            const fetchResults = (): void => {
                fetch("/results.json")
                    .then((res) => res.json())
                    .then((res) => res.users)
                    .then((res) => {
                        console.log("res:" + res);
                        setResults(res);
                    });
            };
            fetchResults();
        }
    }, [id]);

    useEffect(() => {
        const filterResults = (res: Result[]) => {
            console.log(id);
            res.forEach((r) => {
                if (r.id == Number(id)) {
                    setResult(r);
                }
            });
        };
        console.log("results:" + results);
        filterResults(results);
    }, [results]);

    const { name, log, pdf_url, urls, total_score, scores } = result || {};

    return (
        <>
            <div className="m-4 p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">
                    個人分析レポート
                </h1>
                <div className="flex justify-around mb-4">
                    <p className="text-lg font-semibold text-gray-700">
                        氏名: {name}
                    </p>
                    <p className="text-lg font-semibold text-gray-700">
                        トータルスコア: {total_score}
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                        スコア詳細
                    </h2>
                    {scores?.map((score) => (
                        <div
                            key={score.factor_id}
                            className="mb-2 p-4 border rounded-lg bg-gray-50">
                            <p className="font-semibold text-gray-700">
                                {score.factor_name}
                            </p>
                            <p className="text-gray-600">
                                スコア: {score.score}
                            </p>
                            <p className="text-gray-600">
                                理由: {score.reason}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="m-4 p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    ログ
                </h2>
                {log?.split("|").map((text, index) => (
                    <React.Fragment key={`M-${index}`}>
                        {index % 2 === 0 ? (
                            <div className="flex items-center mb-2.5">
                                <div className="bg-gray-100 rounded-lg p-2.5 max-w-[70%]">
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center mb-2.5 justify-end">
                                <div className="bg-blue-50 rounded-lg p-2.5 max-w-[70%]">
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="m-4 p-8 bg-white shadow-md rounded-lg">
                <div>
                    <div className="mb-4"></div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                        履歴書
                    </h2>
                    {pdf_url && (
                        <iframe
                            src={pdf_url}
                            width="100%"
                            height="600px"
                            className="border rounded-lg"></iframe>
                    )}
                    <div className="mb-4"></div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">
                        ポートフォリオ
                    </h2>

                    <a
                        href={urls}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline">
                        {urls}
                    </a>
                </div>
            </div>
        </>
    );
};

export default PersonalPage;
