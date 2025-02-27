import Link from "next/link";
import React from "react";

const SettingButton = () => {
    return (
        <Link href="/settings">
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <span className="material-icons" style={{ fontSize: "48px" }}>
                settings
            </span>
        </Link>
    );
};

export default SettingButton;
