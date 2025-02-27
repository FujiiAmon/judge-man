import SettingButton from "@/components/SettingButton";
import React from "react";

const CompanyLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
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
};

export default CompanyLayout;
