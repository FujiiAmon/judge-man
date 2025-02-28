import Link from "next/link";
import React from "react";

const SubmitPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 text-xl text-gray-800">
            <div className=" p-8 bg-white rounded-lg shadow-lg text-center">
                <p className="m-8">評価の見直しを依頼しました！</p>
                <Link href={`/report`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        戻る
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SubmitPage;
