"use client"
import {SiteHeader} from "@/app/components/siteHeader";
import {ArticleList} from "@/app/components/articleList";
import {SiteFooter} from "@/app/components/siteFooter";
import Link from "next/link";

export default function Home() {
    return (
        <main className={"w-[100%] flex flex-col justify-between items-center gap-10"}>
            <SiteHeader/>
            <div className={"w-[100%] flex flex-col justify-center items-center gap-16"}>
                <ArticleList/>
                <button className={"text-xl border-none bg-black text-white p-4 rounded"}><Link
                    href={"/article-builder"}>Create new</Link></button>
            </div>
            <SiteFooter/>
        </main>
    );
}
