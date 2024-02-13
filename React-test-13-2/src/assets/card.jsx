import {useState} from "react";


export function Card(props) {
    let name = props.name;
    let description = props.description;
    let onClick = props.onClick;

    const [numberOfUpVotes, setNumberOfUpVotes] = useState(0);
    const [numberOfDownVotes, setNumberOfDownVotes] = useState(0);

    const [isHoveringUpVotes, setIsHoveringUpVotes] = useState(false)
    const [isHoveringDownVotes, setIsHoveringDownVotes] = useState(false)

    const handleUpVote = () => {
        setNumberOfUpVotes(numberOfUpVotes + 1)
    }

    const handleDownVote = () => {
        setNumberOfDownVotes(numberOfDownVotes + 1)
    }

    const handleOnHoverUpVotes = () => {
        setIsHoveringUpVotes(true)
    }

    const handleOffHoverUpVotes = () => {
        setIsHoveringUpVotes(false)
    }

    const handleOnHoverDownVotes = () => {
        setIsHoveringDownVotes(true)
    }

    const handleOffHoverDownVotes = () => {
        setIsHoveringDownVotes(false)
    }

    const totalRating = (UpVotes, DownVotes) => {
        if (UpVotes - DownVotes < 0) {
            return 0
        } else {
            return UpVotes - DownVotes
        }
    }

    return (
        <div className={"card"}>
            <div className={"left"}>
                <div className={"topsection"}>
                    <img src={"https://www.freeiconspng.com/thumbs/discord-icon/discord-black-icon-1.png"}
                         alt={"img"}></img>

                    <div className={"right"}>
                        <span className={"bold"}>{name}</span>
                        <br></br>
                        <span>{description}</span>
                    </div>
                </div>

                <div className={"buttons"}>
                    <button onClick={handleUpVote} onMouseOver={handleOnHoverUpVotes}
                            onMouseOut={handleOffHoverUpVotes}>↑ Up Vote {isHoveringUpVotes && (
                        <span>{numberOfUpVotes}</span>)}</button>


                    <button onClick={handleDownVote} onMouseOver={handleOnHoverDownVotes}
                            onMouseOut={handleOffHoverDownVotes}>↓ Down Vote {isHoveringDownVotes && (
                        <span>{numberOfDownVotes}</span>)}</button>
                    <button onClick={onClick}>♡ Add To Favorites</button>


                </div>
            </div>

            <div className={"right"}>
                <span>Total Rating: {totalRating(numberOfUpVotes, numberOfDownVotes)}</span>
            </div>
        </div>
    )
}