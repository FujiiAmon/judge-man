"use client";

import { Result } from "@/types/type_results";
import React, { useEffect, useState } from "react";

const PersonalPage = ({ params }: { params: { id: number } }) => {
    const id = params.id;

    // const filterResults = (res: Result[]) => {
    //     console.log(id);
    //     res.forEach((r) => {
    //         console.log(r);
    //         if (r.id == Number(id)) {
    //             setResult(r);
    //         }
    //     });
    // };
    const [results, setResults] = useState<Result[] | null>(null);
    useEffect(() => {
        const fetchResults = (): void => {
            fetch("/results.json")
                .then((res) => res.json())
                .then((res) => res.users)
                .then((res) => {
                    console.log(typeof res);
                    setResults(res);
                    console.log(typeof results);
                    console.log(results);
                });
        };
        fetchResults();
    }, [id]);
    return <div>{id}</div>;
    // console.log(result);
    // const name = result?.name || "User not found";
    // const log = result?.log || "User not found";

    // return (
    //     <div>
    //         <h1>個人分析</h1>
    //         {<p>氏名: {name}</p>}
    //         <div>
    //             {log.split("|").map((text, index) => (
    //                 <React.Fragment key={`M-${index}`}>
    //                     {index % 2 === 0 ? (
    //                         <div className="flex items-center mb-2.5">
    //                             <div className="bg-gray-200 rounded-lg p-2.5 max-w-[70%]">
    //                                 <p>{text}</p>
    //                             </div>
    //                         </div>
    //                     ) : (
    //                         <div className="flex items-center mb-2.5 justify-end">
    //                             <div className="bg-blue-100 rounded-lg p-2.5 max-w-[70%]">
    //                                 <p>{text}</p>
    //                             </div>
    //                         </div>
    //                     )}
    //                 </React.Fragment>
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default PersonalPage;
