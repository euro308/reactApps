export function UserCard(props) {
    // eslint-disable-next-line react/prop-types
    let name = props.name
    // eslint-disable-next-line react/prop-types
    let age = props.age
    // eslint-disable-next-line react/prop-types
    let myBooks = props.myBooks
    // eslint-disable-next-line react/prop-types
    let level = props.level
    // eslint-disable-next-line react/prop-types
    let imgSrc = props.imgSrc;

    return (
        <div className={"usercard"}>
            <div className={"everything"}>
                <h1>{name}</h1>
                <p>
                    <span>Věk: {age}</span>
                    <p>
                        <span>Moje knihy: {myBooks}</span>
                    </p>
                    <span>Level: {level}</span>
                </p>

                <img src={imgSrc} alt={name}/>
            </div>
        </div>
    )
}