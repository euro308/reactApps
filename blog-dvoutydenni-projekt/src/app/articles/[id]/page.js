"use client";
import {useEffect, useState} from 'react';
import {SiteHeader} from "@/app/components/siteHeader";
import Link from "next/link";
import {SiteFooter} from "@/app/components/siteFooter";

export default function Home() {
    let [name, setName] = useState('');
    let [content, setContent] = useState('');
    let [fontSize, setFontSize] = useState('15px');
    let [bold, setBold] = useState('normal');
    let [italic, setItalic] = useState('normal');
    let [underline, setUnderline] = useState('none');
    let [articleAlign, setArticleAlign] = useState('left');

    useEffect(() => {
        let searchParams = window.location.href;
        let articleNumber = searchParams.substring(searchParams.length - 1);

        let loadData = () => {
            let name = localStorage.getItem(`name[${articleNumber}]`);
            let content = localStorage.getItem(`content[${articleNumber}]`);
            let fontSize = localStorage.getItem(`fontSize[${articleNumber}]`) + "px";
            let bold = localStorage.getItem(`bold[${articleNumber}]`) === "true" ? "bold" : "normal";
            let italic = localStorage.getItem(`italic[${articleNumber}]`) === "true" ? "italic" : "normal";
            let underline = localStorage.getItem(`underline[${articleNumber}]`) === "true" ? "underline" : "none";
            let articleAlign = localStorage.getItem(`articleAlign[${articleNumber}]`);

            setName(name);
            setContent(content);
            setFontSize(fontSize);
            setBold(bold);
            setItalic(italic);
            setUnderline(underline);
            setArticleAlign(articleAlign);
        };

        loadData();
    }, [window.location.href]);


    return (
        <main className={"w-[100%] flex flex-col justify-center items-center gap-10"}>
            <SiteHeader/>
            <div className={"w-[70%] flex flex-col justify-center"}>
                <h1 className={"font-bold text-6xl"}>{name}</h1>
            </div>

            <div className={"flex flex-col w-[70%] h-[400px] border-2 overflow-y-scroll whitespace-pre-wrap"}
                 style={{textAlign: articleAlign}}>
                <span
                    className={`w-full min-h-[87%] max-h-[87%] p-4 outline-0`}
                    style={{
                        fontSize: fontSize,
                        fontWeight: bold,
                        fontStyle: italic,
                        textDecoration: underline,
                    }}>
                    {content}
                </span>
            </div>
            <button className={"text-xl border-none bg-black text-white p-4 rounded"}><Link href={"/"}>Go Back</Link>
            </button>
            <SiteFooter/>
        </main>
    );
}
