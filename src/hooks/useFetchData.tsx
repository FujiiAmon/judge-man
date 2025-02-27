"use client";

import { useEffect, useState } from "react";
import { Data } from "@/types/type_entry";

const useFetchData = () => {
    const [data, setData] = useState<Data | null>(null);
    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return { data };
};

export default useFetchData;
