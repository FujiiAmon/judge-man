"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Factor, Result } from "@/types/type_results";

const ResultPage = () => {
    const [results, setResults] = React.useState<Result[] | null>([]);
    const [factors, setFactors] = React.useState<Factor[] | null>([]);

    useEffect(() => {
        const fetchResults = (): void => {
            fetch("http://localhost:3000/api/results")
                .then((res) => res.json())
                .then((res) => res.users)
                .then((res) => setResults(res));
        };
        fetchResults();

        const fetchFactors = (): void => {
            fetch("http://localhost:3000/api/factors")
                .then((res) => res.json())
                .then((res) => setFactors(res));
        };
        fetchFactors();
    }, []);

    const passLine: number = 40;

    return (
        <>
            <div className="p-5 font-sans">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-4 bg-gray-100 text-center">
                                志望者
                            </th>
                            <th className="border border-gray-300 p-4 bg-gray-100 text-center">
                                トータルスコア
                            </th>

                            {factors?.map((factor: Factor) => (
                                <th
                                    key={factor.id}
                                    className="border border-gray-300 p-4 bg-gray-100 text-center">
                                    {factor.title}
                                </th>
                            ))}
                            <th className="border border-gray-300 p-4 bg-gray-100 text-center">
                                feedback
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {results
                            ?.sort(
                                (a: Result, b: Result) =>
                                    b.total_score - a.total_score
                            )
                            .map((result: Result, index: number) => (
                                <tr
                                    key={result.id}
                                    className={`${
                                        index >=
                                        Math.floor(
                                            results.length * (passLine / 100)
                                        )
                                            ? "bg-red-100"
                                            : "bg-white"
                                    } hover:bg-red-200`}>
                                    <td className="border border-gray-300 p-4 text-center">
                                        <Link
                                            href={`/report/personal/${result.id}`}
                                            className="text-blue-500 hover:underline font-semibold">
                                            {result.name}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 p-4 text-center">
                                        {result.total_score}
                                    </td>
                                    {result.scores.map((score) => (
                                        <td
                                            key={score.factor_id}
                                            className="border border-gray-300 p-4 text-center">
                                            {score.score}
                                        </td>
                                    ))}
                                    <td className="border border-gray-300 p-4 text-center">
                                        <Link href={`/report/submit`}>
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                再評価
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ResultPage;
