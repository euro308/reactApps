// import {useState} from "react";

import {useState} from "react";

export function Movie(props) {
    const movie = props.movie;
    /*
    const stars = [];
    const [starStatus, newStarStatus] = useState("👎");

    function changeStar() {
        if (starStatus === "👎") {
            newStarStatus("👍")
        } else {
            newStarStatus("👎")
        }
    }

    for (let i = 0; i < 5; i++) {
        stars.push(
            <button onClick={changeStar} className={"star"}>{starStatus}</button>
        )
    }
     */

    const [likeCount, newLikeCount] = useState(0)
    const [dislikeCount, newDislikeCount] = useState(0)

    function ChangeLikeCount() {
        newLikeCount(likeCount + 1)
    }

    function ChangeDislikeCount() {
        newDislikeCount(dislikeCount + 1)
    }

    return (
        <div className={"movie"}>
            <img src={movie.img} alt={"img"}/>
            <div className={"text"}>
                <h2>{movie.name}</h2>
                <br/>
                <span>{movie.author}</span>
            </div>
            <div className={"stars"}>
                <button onClick={ChangeLikeCount} className={"likecount"}> Likes: {likeCount} 👍</button>
                <button onClick={ChangeDislikeCount} className={"likecount"}> Dislikes: {dislikeCount} 👎</button>
            </div>
        </div>
    )
}