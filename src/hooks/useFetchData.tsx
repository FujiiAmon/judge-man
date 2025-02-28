"use client";

import { Data } from "@/types/type_results";
import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState<Data[] | null>(null);
    useEffect(() => {
        fetch("http://localhost:3000/api/company/results")
            .then((res) => res.json())
            .then((res) => res.users)
            .then((data) => setData(data));
    }, []);
    return { data };
};

export default useFetchData;
