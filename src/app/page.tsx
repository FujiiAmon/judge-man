import Link from "next/link";
export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                <h1 className="text-2xl font-bold">Home Page</h1>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <div className="flex gap-4 mt-8 p-4">
                    <Link
                        href="/report"
                        className="w-50 h-20 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center text-center transition-transform transform hover:scale-105 p-2">
                        <span className="material-icons mr-2">business</span>
                        企業様はこちら
                    </Link>
                    <Link
                        href="/entry"
                        className="w-50 h-20 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center text-center transition-transform transform hover:scale-105 p-2">
                        <span className="material-icons mr-2">person</span>
                        <span className="whitespace-nowrap">
                            応募者様はこちら
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
