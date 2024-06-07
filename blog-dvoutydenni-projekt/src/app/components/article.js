import Link from "next/link";

export function Article(articleNumber, articleName, articleContent) {

    function deleteArticle() {
        localStorage.removeItem(`name[${articleNumber}]`);
        localStorage.removeItem(`content[${articleNumber}]`);
        localStorage.removeItem(`fontSize[${articleNumber}]`);
        localStorage.removeItem(`bold[${articleNumber}]`);
        localStorage.removeItem(`italic[${articleNumber}]`);
        localStorage.removeItem(`underline[${articleNumber}]`);
        localStorage.removeItem(`articleAlign[${articleNumber}]`);

        let number = localStorage.getItem("number")
        number--
        localStorage.setItem("number", number)

        if (localStorage.length <= 4) {
            localStorage.clear()
        }

        alert("Deleted!")
        location.reload();
    }

    return (
        <div className={"flex justify-between items-center border-b-2 w-full p-4"}>
            <Link href={`/articles/${articleNumber}`} className={"max-w-[70%]"}>
                <div className={"truncate text-ellipsis"}>
                    <h2 className={"font-bold text-3xl text-ellipsis"}>{articleName}</h2>
                    <span className={"flex flex-wrap"}>{articleContent}</span>
                </div>
            </Link>

            <div className={"flex justify-between items-center gap-5"}>
                <Link className={"border-2 p-2"} href={`/article-editor/${articleNumber}`}><img alt={"Edit"}
                                                                                                width={"30px"}
                                                                                                height={"30px"}
                                                                                                src={"https://static-00.iconduck.com/assets.00/edit-icon-256x256-i9m4d33w.png"}/></Link>
                <button className={"border-2 p-2"} onClick={deleteArticle}><img alt={"Delete"} width={"32px"}
                                                                                height={"32px"}
                                                                                src={"https://cdn-icons-png.flaticon.com/512/3405/3405244.png"}/>
                </button>
            </div>
        </div>
    )
}