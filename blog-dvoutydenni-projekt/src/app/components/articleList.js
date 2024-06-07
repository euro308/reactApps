"use client"
import {Article} from "@/app/components/article";


export function ArticleList() {
    let articlesArray = []

    for (let i = 0; i < localStorage.length; i++) {

        let name = localStorage.getItem(`name[${i}]`);
        let content = localStorage.getItem(`content[${i}]`);
        let fontSize = localStorage.getItem(`fontSize[${i}]`);
        let bold = localStorage.getItem(`bold[${i}]`);
        let italic = localStorage.getItem(`italic[${i}]`);
        let underline = localStorage.getItem(`underline[${i}]`);
        let articleAlign = localStorage.getItem(`articleAlign[${i}]`);
        let articleNumber = i

        if (name && content && fontSize && bold && italic && underline && articleAlign) {
            articlesArray.unshift({name, content, fontSize, bold, italic, underline, articleAlign, articleNumber});
        }
    }

    return (
        <main
            className={"min-w-[80%] max-w-[80%] h-[500px] flex flex-col justify-center items-center border-2 overflow-y-scroll"}>
            {articlesArray.map((article) => (
                Article(article.articleNumber, article.name, article.content)
            ))}
        </main>
    );
}

