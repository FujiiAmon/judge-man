"use client";

import { useEffect, useState } from "react";
import useFetchData from "./useFetchData";

const useFetchPersonalData = (id: string) => {
    const [userName, setUserName] = useState<string | null>(null);
    const { data } = useFetchData();

    useEffect(() => {
        if (data) {
            const user = data.users.find(
                (user: { id: number }) => user.id === parseInt(id)
            );
            if (user) {
                setUserName(user.name);
            }
        }
    }, [data, id]);

    return { userName };
};

export default useFetchPersonalData;
