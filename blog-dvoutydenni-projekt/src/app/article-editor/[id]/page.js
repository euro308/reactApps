"use client"
import {SiteHeader} from "@/app/components/siteHeader";
import Link from "next/link";
import {SiteFooter} from "@/app/components/siteFooter";
import {useEffect, useState} from "react";

let searchParams = window.location.href;
let articleNumber = searchParams.substring(searchParams.length - 1);

let name = localStorage.getItem(`name[${articleNumber}]`);
let articleContent = localStorage.getItem(`content[${articleNumber}]`);
let fontSize = localStorage.getItem(`fontSize[${articleNumber}]`);
let bold = localStorage.getItem(`bold[${articleNumber}]`)
let italic = localStorage.getItem(`italic[${articleNumber}]`);
let underline = localStorage.getItem(`underline[${articleNumber}]`);
let align = localStorage.getItem(`articleAlign[${articleNumber}]`);

function setTheRightAttributes() {
    let articleText = document.getElementById("articleText");
    articleText.style.fontSize = fontSize + "px"
    articleText.style.fontWeight = bold ? "bold" : "normal"
    articleText.style.fontStyle = italic ? "italic" : "normal"
    articleText.style.textDecoration = underline ? "underline" : "none"
    articleText.style.textAlign = align
}

function colorTheRightButtons() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        if (button.innerHTML === "Bold Text" && bold) {
            button.style.backgroundColor = 'rgb(241, 241, 241)';
        } else if (button.innerHTML === "Italic Text" && italic) {
            button.style.backgroundColor = 'rgb(241, 241, 241)';
        } else if (button.innerHTML === "Underlined Text" && underline) {
            button.style.backgroundColor = 'rgb(241, 241, 241)';
        } else if (button.innerHTML.toLowerCase() === `align ${align}`) {
            button.style.backgroundColor = 'rgb(241, 241, 241)';
        }
    });
}

function handleTextSize(event) {
    let articleText = document.getElementById("articleText");

    if (event.currentTarget.value < 15) {
        event.currentTarget.value = 15;
    }

    fontSize = event.currentTarget.value;
    articleText.style.fontSize = fontSize + "px";
}

function handleTextChanges(button) {
    let articleText = document.getElementById("articleText");

    if (button.style.backgroundColor !== "white") {
        if (button.innerHTML === "Bold Text") {
            bold = true;
            articleText.style.fontWeight = "bold";
        } else if (button.innerHTML === "Italic Text") {
            italic = true;
            articleText.style.fontStyle = "italic";
        } else if (button.innerHTML === "Underlined Text") {
            underline = true;
            articleText.style.textDecoration = "underline";
        }
    } else {
        if (button.innerHTML === "Bold Text") {
            bold = false;
            articleText.style.fontWeight = "normal";
        } else if (button.innerHTML === "Italic Text") {
            italic = false;
            articleText.style.fontStyle = "normal";
        } else if (button.innerHTML === "Underlined Text") {
            underline = false;
            articleText.style.textDecoration = "none";
        }
    }
}

function handleClick(event) {
    let button = event.currentTarget;

    if (button.style.backgroundColor === 'rgb(241, 241, 241)') {
        button.style.backgroundColor = 'white';
    } else {
        button.style.backgroundColor = 'rgb(241, 241, 241)';
    }
    handleTextChanges(button);
}

function handleAligns(event) {
    let articleText = document.getElementById("articleText");
    let button = event.currentTarget;
    let allAligns = document.querySelectorAll("#align");

    allAligns.forEach((btn) => {
        btn.style.backgroundColor = "white";
    });

    button.style.backgroundColor = "rgb(241, 241, 241)";

    articleText.style.textAlign = button.dataset.align;
    align = button.dataset.align;
}

function saveArticle() {
    let articleName = document.getElementById("articleName").value;
    let articleText = document.getElementById("articleText").value;

    if (articleName.length > 0 && articleText.length > 0) {
        alert("Saved!");

        localStorage.setItem(`name[${articleNumber}]`, articleName);
        localStorage.setItem(`content[${articleNumber}]`, articleText);
        localStorage.setItem(`fontSize[${articleNumber}]`, fontSize);
        localStorage.setItem(`bold[${articleNumber}]`, bold);
        localStorage.setItem(`italic[${articleNumber}]`, italic);
        localStorage.setItem(`underline[${articleNumber}]`, underline);
        localStorage.setItem(`articleAlign[${articleNumber}]`, align);

    } else {
        alert("Either the Article's Name or Text is blank!");
    }
}

export default function Home() {
    let [articleName, setArticleName] = useState(name)
    let [content, setContent] = useState(articleContent)

    useEffect(() => {
        setTheRightAttributes();
        colorTheRightButtons();
    }, []);

    return (
        <main className={"w-[100%] flex flex-col justify-center items-center"}>
            <SiteHeader/>

            {/* Article Name */}
            <div className={"min-w-[70%] h-[120px] flex flex-col justify-center"}>
                <h2 className={"font-bold text-2xl"}>Name of the Article</h2>
                <input id={"articleName"} type={"text"} placeholder={"Article Header"}
                       className={"min-w-full h-[50px] rounded border-2 pl-2 font-bold text-xl"} required={true}
                       value={articleName} onChange={(e) => setArticleName(e.target.value)}>

                </input>
            </div>

            {/* Article Text */}
            <div className={"w-[70%] flex flex-col justify-center"}>
                <h2 className={"font-bold text-2xl"}>Article Text</h2>

                <div id={"article"} className={"border-2 rounded h-[400px]"}>
                    <div id={"textOptions"}
                         className={"flex justify-around items-center h-12 border-b-2 border-gray"}>
                        <div className={"w-[20%] flex justify-around p-2"}>
                            <span className={""}>Font Size:</span>
                            <input className={"text-center w-[25%]"} type={"number"} placeholder={fontSize}
                                   onChange={handleTextSize}/>
                        </div>

                        <button id={"bold"} className={"font-bold rounded p-2"} onClick={handleClick}
                                onLoad={colorTheRightButtons}>Bold Text
                        </button>
                        <button id={"italic"} className={"italic rounded p-2"} onClick={handleClick}
                                onLoad={colorTheRightButtons}>Italic Text
                        </button>
                        <button id={"underline"} className={"underline rounded p-2"}
                                onClick={handleClick} onLoad={colorTheRightButtons}>Underlined
                            Text
                        </button>

                        <button id={"align"} className={"rounded p-2 bg-[#f1f1f1]"} data-align="left"
                                onClick={handleAligns} onLoad={colorTheRightButtons}>Align
                            Left
                        </button>
                        <button id={"align"} className={"rounded p-2"} data-align="center"
                                onClick={handleAligns} onLoad={colorTheRightButtons}>Align
                            Center
                        </button>
                        <button id={"align"} className={"rounded p-2"} data-align="right"
                                onClick={handleAligns} onLoad={colorTheRightButtons}>Align
                            Right
                        </button>
                        <button id={"align"} className={"rounded p-2"} data-align="justify"
                                onClick={handleAligns} onLoad={colorTheRightButtons}>Justify
                        </button>
                    </div>

                    <textarea id={"articleText"}
                              className={"w-full min-h-[87%] max-h-[87%] p-4 outline-0 text-[15px]"}
                              required={true} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
            </div>

            <div className={"flex flex-col gap-8 justify-center items-center mt-14 mb-10"}>
                <button id={"save"}
                        className={"text-4xl border-none bg-[#f1f1f1] p-4 rounded font-bold"}
                        onClick={saveArticle}><Link href={"/"}>Save Article</Link>
                </button>
                <button className={"text-xl border-none bg-black text-white p-4 rounded"}><Link
                    href={"/"}>Go Back</Link></button>
            </div>
            <SiteFooter/>
        </main>
    );
}
