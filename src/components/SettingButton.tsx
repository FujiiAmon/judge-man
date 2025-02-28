"use client";

import Link from "next/link";
import React from "react";

const SettingButton = () => {
    return (
        <Link href="/results/factors">
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <span
                className="material-icons text-8xl transition-transform duration-200 bg-gray-200 p-2 rounded-full"
                onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "rotate(120deg)")
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "rotate(0deg)")
                }>
                settings
            </span>
        </Link>
    );
};

export default SettingButton;
