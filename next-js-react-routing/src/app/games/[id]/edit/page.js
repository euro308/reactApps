"use client"
import styles from "./edit.module.css"
import {gameList} from "@/app/games/page"
import {UpdateGamesInfo} from "@/app/games/page";
import {useState} from "react";
import Link from "next/link";

export default function Edit({params}) {
    let currentGame = gameList.find(game => game.id === parseInt(params.id))

    let [title, newTitle] = useState(currentGame.title)
    let [genre, newGenre] = useState(currentGame.genre)
    let [releaseDate, newReleaseDate] = useState(currentGame.releaseDate)
    let [description, newDescription] = useState(currentGame.description)

    return (
        <main>
            <div className={styles.container}>
                <h1>{title}</h1>
                <span><strong>Genre:</strong> {genre}</span>
                <span><strong>Release Date:</strong> {releaseDate}</span>
                <span><strong>Description:</strong> {description}</span>
            </div>

            <div className={styles.container}>
                <h2>Edit The Game's Attributes</h2>
                <span><strong>Name: </strong><input type={"text"} className={styles.input} value={title} onChange={(e) =>
                    newTitle(e.target.value)
                }></input></span>

                <span><strong>Genre: </strong><input type={"text"} className={styles.input} value={genre} onChange={(e) =>
                    newGenre(e.target.value)}></input></span>

                <span><strong>Release Date: </strong><input type={"text"} className={styles.input} value={releaseDate} onChange={(e) =>
                    newReleaseDate(e.target.value)
                }></input></span>

                <span><strong>Description: </strong><input type={"text"} className={styles.input} value={description} onChange={(e) =>
                    newDescription(e.target.value)
                }></input></span>

                <button className={styles.buttons} onClick={() => {
                    UpdateGamesInfo({
                            id: currentGame.id,
                            title: currentGame.title,
                            genre: currentGame.genre,
                            releaseDate: currentGame.releaseDate,
                            description: currentGame.description
                        })
                        console.log(UpdateGamesInfo);
                }}>Save information</button>
                <button className={styles.buttons}><Link href={"/games"} className={styles.link}>Go Back</Link></button>
            </div>

            <div className={styles.success} hidden={true}>Saved!</div>

        </main>
    )
}
