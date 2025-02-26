"use client";

import useFetchPersonalData from "@/utils/useFetchPersonalData";
import React from "react";

const PersonalPage = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const { userName } = useFetchPersonalData(id);

    return (
        <div>
            <h1>User Details</h1>
            {userName ? <p>Name: {userName}</p> : <p>User not found</p>}
        </div>
    );
};

export default PersonalPage;
