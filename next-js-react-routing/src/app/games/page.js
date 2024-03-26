"use client"
import styles from "./games.module.css";
import Link from "next/link";

export let gameList = [
    {
        "id": 1,
        "title": "Public what fly least",
        "genre": "Mystery",
        "releaseDate": "2018-09-13",
        "description": "Friend usually treat general smile. Doctor onto civil. From appear reason television probably. Give economy what different especially particular."
    },
    {
        "id": 2,
        "title": "Close court side far",
        "genre": "Action",
        "releaseDate": "2009-12-09",
        "description": "Kitchen party receive plan quickly choose three. Wear pay form former discuss. Agreement check half happy. Public market difficult enough."
    },
    {
        "id": 20,
        "title": "Question heart bad",
        "genre": "Drama",
        "releaseDate": "2011-04-06",
        "description": "It both task compare order tell really open. Fire appear movement drive child. Personal might office good month. Technology key beat. Artist between scientist piece."
    }
];

export function UpdateGamesInfo({id, title, genre, releaseDate, description}) {
    let game = gameList.find(game => game.id === id)
    if (game) {
        game.title = title
        game.genre = genre
        game.releaseDate = releaseDate
        game.description = description
    }
}

export default function Games() {
    let games = gameList.map((game) =>
        <div>
            <h1>{game.title}</h1>
            <span>Genre: {game.genre}</span>
            <span>Release Date: {game.releaseDate}</span>
            {game.description}
            <Link href={`/games/${game.id}/edit`} className={styles.link}>Edit data</Link>
        </div>)
    return (
        <main>
            <h1 className={styles.title}>Games:</h1>
            <div className={styles.container}>
                {games}
            </div>
        </main>
    );
}