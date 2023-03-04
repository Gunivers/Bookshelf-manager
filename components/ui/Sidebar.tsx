import Link from "next/link"

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-full">
            <header className="flex-grow-0 flex-shrink-0">
                <h1>Bookshelf Manager</h1>
            </header>
            <hr />
            <div className="flex-grow flex-shrink overflow-auto">
                <nav className="flex flex-col">
                    <Link href="/about">About</Link>
                    <Link href="/tools">Tools</Link>
                    <Link href="/docs">Documentation</Link>
                    <Link href="/git">Git Repository</Link>
                    <Link href="/bugs">Report a bug</Link>
                    <Link href="/join-us">Join us !</Link>
                    <Link href="/help-us">Help us</Link>
                </nav>
                <hr />
                <div>
                    <p>Contributors</p>
                </div>
                <div>
                    AD
                </div>
            </div>
            <footer className="flex-grow-0 flex-shrink-0">
                <p className="text-xs">©Gunivers 2023 - Mentions légales</p>
            </footer>
        </div>
    )
}