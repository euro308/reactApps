import {Card} from "./Card.jsx";

export function MovieCard(img, title, author, rating) {
    return <Card>
        <img src={img} alt="thumbnail"/>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h2>{rating}</h2>
    </Card>
}