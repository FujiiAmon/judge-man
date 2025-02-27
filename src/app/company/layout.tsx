import SettingButton from "@/components/SettingButton";
import React from "react";

export default function CompanyLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                {children}
                <div className="fixed bottom-5 right-5">
                    <SettingButton />
                </div>
            </body>
        </html>
    );
}
