import SettingButton from "@/components/SettingButton";
import React from "react";

export default function ReportLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            {children}
            <div className="fixed bottom-5 right-5">
                <SettingButton />
            </div>
        </>
    );
}
