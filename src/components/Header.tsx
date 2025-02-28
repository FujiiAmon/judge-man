import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <>
            <Link href="/">
                <div
                    id="header"
                    className="z-50 sticky bottom-0 w-full m-0 p-0 text-center text-xl font-bold text-white bg-gradient-to-r from-[#142850] via-[#14365f] to-[#04ccb1]">
                    JUDGEMAN
                </div>
            </Link>
        </>
    );
};

export default Header;
