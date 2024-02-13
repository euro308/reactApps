import {Card} from "./card.jsx";
import {useState} from "react";

let cards = [
    {name: "In-Flight Movies", description: "Browse movies, TV Shows and music on your device"},
    {name: "Disney+", description: "Pusťte si jakkýkoli Disney film, všechny na jednom místě!"},
    {name: "Netflix", description: "Netflix is your one stop movie provider service."}
]

export function Feet() {

    const [isFavorite, setIsFavorite] = useState(false);
    let favoritecount = 0

    const handleFavorites = () => {
        if (isFavorite === true) {
            setIsFavorite(false)
            favoritecount--
        } else {
            setIsFavorite(true)
            favoritecount++
        }
    }


    return (
        <div className={"feet"}>

            <div className={"header"}>
                <h1>Feet</h1>
                <h1 className={"favorites"}>♡: {favoritecount}</h1>
            </div>

            <div className={"cards"}>
                {cards.map(card => (
                    <Card name={card.name} description={card.description} onClick={handleFavorites}/>
                ))}
            </div>
        </div>
    )
}