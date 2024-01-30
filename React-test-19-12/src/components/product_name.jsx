let name = "PlayStation 5"
let details = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quibusdam?"


export function ProductName() {
    return (
        <div>
            <span className={"name"}>{name}</span>

            <p>
                <span className={"details"}>{details}</span>
            </p>

        </div>
    )
}