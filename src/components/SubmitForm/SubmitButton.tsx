import React from "react";

const SubmitButton = () => {
    return (
        <>
            <div className="flex justify-center mt-4">
                <button
                    type="submit"
                    className=" px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer">
                    提出する
                </button>
            </div>
        </>
    );
};

export default SubmitButton;
