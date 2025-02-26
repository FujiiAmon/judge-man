"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Score = () => {
    interface User {
        id: number;
        name: string;
        score: number;
    }
    interface Factor {
        id: number;
        name: string;
        weight: number;
    }

    interface Score {
        user_id: number;
        factor_id: number;
        score: number;
    }

    interface Data {
        users: User[];
        factors: Factor[];
        scores: Score[];
    }

    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const users: User[] = data?.users ?? [];
    const factors: Factor[] = data?.factors ?? [];
    const scores: Score[] = data?.scores ?? [];

    // console.log(users);

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

export default Score;
