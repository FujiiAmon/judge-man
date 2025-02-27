"use client";

import useFetchPersonalData from "@/hooks/useFetchPersonalData";
import React, { useEffect, useState } from "react";

const PersonalPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const [unwrappedParams, setUnwrappedParams] = useState<{
        id: string;
    } | null>(null);

    React.useEffect(() => {
        params.then((resolvedParams) => {
            setUnwrappedParams(resolvedParams);
        });
    }, [params]);

    const id = unwrappedParams?.id;
    const { userName } = useFetchPersonalData(id || "");
    const [dialog, setDialog] = React.useState("");

    useEffect(() => {
        fetch("/dialog.json")
            .then((response) => response.json())
            .then((data) => {
                setDialog(data.dialog);
            });
    }, []);

    return (
        <div>
            <h1>User Details</h1>
            {userName ? <p>Name: {userName}</p> : <p>User not found</p>}
            <div>
                {dialog.split("|").map((text, index) => (
                    <React.Fragment key={`M-${index}`}>
                        {index % 2 === 0 ? (
                            <div className="flex items-center mb-2.5">
                                <div className="bg-gray-200 rounded-lg p-2.5 max-w-[70%]">
                                    <p>{text}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center mb-2.5 justify-end">
                                <div className="bg-blue-100 rounded-lg p-2.5 max-w-[70%]">
                                    <p>{text}</p>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default PersonalPage;
