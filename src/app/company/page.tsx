"use client";
import Link from "next/link";
import React from "react";
import { Factor, Score, User } from "@/types/type_entry";
import useFetchData from "@/hooks/useFetchData";

const ScorePage = () => {
    const { data } = useFetchData();

    const users: User[] = data?.users ?? [];
    const factors: Factor[] = data?.factors ?? [];
    const scores: Score[] = data?.scores ?? [];

    const passLine: number = 40;

    return (
        <>
            <div className="p-5 font-sans">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 bg-gray-200 rounded-tl-lg">
                                User
                            </th>
                            {factors.map((factor) => (
                                <th
                                    key={factor.id}
                                    className={`border border-gray-300 p-2 bg-gray-200`}>
                                    {factor.name}
                                </th>
                            ))}
                            <th className="border border-gray-300 p-2 bg-gray-200">
                                total
                            </th>
                            <th className="border border-gray-300 p-2 bg-gray-200">
                                評価
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users
                            .map((user) => {
                                const totalScore = scores
                                    .filter((s) => s.user_id === user.id)
                                    .reduce((acc, curr) => acc + curr.score, 0);
                                return { ...user, totalScore };
                            })
                            .sort((a, b) => b.totalScore - a.totalScore)
                            .map((user, userIndex) => (
                                <tr
                                    key={user.id}
                                    className={`
                                        ${
                                            userIndex % 2 === 0
                                                ? "bg-gray-100"
                                                : ""
                                        }
                                        ${
                                            userIndex >=
                                            Math.floor(
                                                users.length * (passLine / 100)
                                            )
                                                ? "bg-red-100"
                                                : ""
                                        }
                                        `}>
                                    <td className="border-l border-r border-gray-300 p-2 text-center">
                                        <Link
                                            className="text-blue-500"
                                            href={`company/scores/${user.id}`}>
                                            {user.name}
                                        </Link>
                                    </td>
                                    {factors.map((factor) => {
                                        const score =
                                            scores.find(
                                                (s) =>
                                                    s.user_id === user.id &&
                                                    s.factor_id === factor.id
                                            )?.score ?? 0;
                                        return (
                                            <td
                                                key={factor.id}
                                                className={`border-l border-r border-gray-300 p-2 text-center`}>
                                                {score}
                                            </td>
                                        );
                                    })}
                                    <td className="border-l border-r border-gray-300 p-2 text-center">
                                        {user.totalScore}
                                    </td>
                                    <td className="border-l border-r border-gray-300 p-2 text-center">
                                        <input type="checkbox" checked={true} />
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ScorePage;
