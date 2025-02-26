"use client";

import React, { useEffect, useState } from "react";

const Personal = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                const user = data.users.find(
                    (user: { id: number }) => user.id === parseInt(id)
                );
                if (user) {
                    setUserName(user.name);
                }
            });
    }, [id]);

    return (
        <div>
            <h1>User Details</h1>
            {userName ? <p>Name: {userName}</p> : <p>User not found</p>}
        </div>
    );
};

export default Personal;
