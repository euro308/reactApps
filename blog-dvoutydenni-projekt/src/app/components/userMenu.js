import Link from "next/link";

export function UserMenu() {
    return (
        <main className={"w-[55%] h-[100px] flex justify-center items-center gap-6"}>
            <input type={"text"} placeholder={"Search for an article..."} className={"text-2xl w-8/12 border-2 text-black h-16 pl-5"}/>
            <button className={"text-xl border-none bg-black text-white p-4 rounded"}><Link href={"/article-builder"}>Create new</Link></button>
        </main>
    )
}