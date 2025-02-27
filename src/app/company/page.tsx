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

    return (
        <>
            <div className="p-5 font-sans">
                <h1 className="text-center text-gray-800">Score Page</h1>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 bg-gray-200">
                                User
                            </th>
                            {factors.map((factor) => (
                                <th
                                    key={factor.id}
                                    className="border border-gray-300 p-2 bg-gray-200">
                                    {factor.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border border-gray-300 p-2 text-center">
                                    <Link href={`/score/${user.id}`}>
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
                                            className="border border-gray-300 p-2 text-center">
                                            {score}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ScorePage;
