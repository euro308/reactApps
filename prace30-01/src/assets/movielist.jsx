import {Movie} from "./movie.jsx";



export function MovieList() {
    let movies = [
        {name: "Bob a Bobek", author: "Petr Vomáčka", img:"https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/159/857/159857121_dfcaba.jpg"},
        {name: "Harry Potter", author:"J.K. Rowling", img:"https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"},
        {name: "Mr. Bean ve filmu", author:"Bob Vomáčka", img:"data:image/jpeg;base64,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"}
    ]

    return (
        <div className={"movielist"}>
            {movies.map((movie) => (
                <div>
                <Movie movie={movie}/>
                </div>
            ))}
        </div>
    )
}