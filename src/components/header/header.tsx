import Link from "next/link"

export const Header = () => {
    return (
        <header className="py-[50px] bg-pink-400">
            <div className="container">
                <div className="flex gap-[20px]">
                    <Link href={"/"}>Phones</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/profile"}>Profile</Link>
                </div>
            </div>
        </header>
    )
}