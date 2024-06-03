import Link from "next/link";

export function CreateArticle() {
    return (
        <button className={"newArticle"}><Link href={"/article-builder"}>Create new</Link></button>
    )
}