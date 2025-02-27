"use client";

import React from "react";

import { useState } from "react";

const InputParams = () => {
    const [titles, setTitles] = useState<string[]>(Array(5).fill(""));
    const [details, setDetails] = useState<string[]>(Array(5).fill(""));
    const [sliderValues, setSliderValues] = useState<number[]>(
        Array(5).fill(0)
    );
    return (
        <div className="space-y-4 m-4">
            {[...Array(5)].map((_, index) => (
                <div key={index}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-green-700">
                            評価項目 {index + 1}:
                        </label>
                        <input
                            className="border rounded p-2 bg-green-50"
                            type="text"
                            name={`title${index + 1}`}
                            value={titles[index]}
                            onChange={(e) => {
                                const newTitles = [...titles];
                                newTitles[index] = e.target.value;
                                setTitles(newTitles);
                            }}
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="font-semibold text-green-700">
                            詳細内容 {index + 1}:
                        </label>
                        <textarea
                            className="border rounded p-2 bg-green-50"
                            name={`detail${index + 1}`}
                            value={details[index]}
                            onChange={(e) => {
                                const newDetails = [...details];
                                newDetails[index] = e.target.value;
                                setDetails(newDetails);
                            }}></textarea>
                        <div className="flex flex-col mt-2">
                            <label className="font-semibold text-green-700">
                                重要度
                            </label>

                            <input
                                className="border rounded p-2 bg-green-50"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                name={`slider${index + 1}`}
                                value={sliderValues[index]}
                                onChange={(e) => {
                                    const newSliderValues = [...sliderValues];
                                    newSliderValues[index] = parseFloat(
                                        e.target.value
                                    );
                                    setSliderValues(newSliderValues);
                                }}
                            />
                            <span className="font-semibold text-green-700">
                                {sliderValues[index]}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex space-x-4 mt-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => alert("更新ボタンがクリックされました")}>
                    更新
                </button>
                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    onClick={() => alert("戻るボタンがクリックされました")}>
                    戻る
                </button>
            </div>
        </div>
    );
};

export default InputParams;
