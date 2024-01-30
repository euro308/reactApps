export function BookCard(props) {
    // eslint-disable-next-line react/prop-types
    let name = props.name;
    // eslint-disable-next-line react/prop-types
    let emoji = props.emoji;

    return (
        <div className={"bookcard"}>
            <h2>{name}</h2>
            <span>{emoji}</span>
        </div>
    );
}