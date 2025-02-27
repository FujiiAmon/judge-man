import Link from "next/link";
export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/submit">Go to Submit Page</Link>
                    </li>
                    <li>
                        <Link href="/score">Go to Score Page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
