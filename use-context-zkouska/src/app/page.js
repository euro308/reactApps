"use client"
import {createContext, useContext} from 'react';
import {useState} from 'react';

let planetData = [
    {name: "Earth", hasWater: true, canBeLivedOn: true, radius: 6371, themeColor: "#4d7a97", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqEcKPWOAAklliBpZfMsnc51tNaLpWTZO5xuMaseW7Q&s"},
    {name: "Mars", hasWater: true, canBeLivedOn: false, radius: 3389.5, themeColor: "#ed8257", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8U6uIJwazDGmtWvIBCh5m97ePk9EWPwBn5KXiPiM32A&s"},
    {name: "Neptune", hasWater: true, canBeLivedOn: false, radius: 24622, themeColor: "#416bf4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KwfvxcxZ68OZC-vIy-5vL3kojOImPR9g-uspvXq-xQ&s"},
    {name: "Jupiter", hasWater: true, canBeLivedOn: false, radius: 69911, themeColor: "#e7ab6a", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOX_AvDzM9UP5marnmb7rvQd2zRAbKZm75ym0BFJC0w&s"}
]

const Context = createContext(planetData);

export default function Home() {
    return (
        <main>
            <Context.Provider value={planetData}>
                <PlanetCard/>
            </Context.Provider>
        </main>
    );
}

function PlanetCard() {
    const planets = useContext(Context)
    const className = "planet-container"

    console.log(className)

    const [planetName, setPlanetName] = useState(planets[0].name);
    const [planetImg, setPlanetImg] = useState(planets[0].img);
    const [hasWater, setHasWater] = useState(planets[0].hasWater);
    const [canBeLivedOn, setCanBeLivedOn] = useState(planets[0].canBeLivedOn);
    const [radius, setRadius] = useState(planets[0].radius);

    const selectChange = (e) => {
        const planet = planets.find(planet => planet.name === e.target.value)

        setPlanetName(planet.name)
        setPlanetImg(planet.img)
        setHasWater(planet.hasWater)
        setCanBeLivedOn(planet.canBeLivedOn)
        setRadius(planet.radius)
    }

    return (
        <div className={className}>

            <label>
                <select className={"select"}> onChange={selectChange}
                    <option>Earth</option>
                    <option>Mars</option>
                    <option>Neptune</option>
                    <option>Jupiter</option>
                </select>
            </label>

            <div className={"header"}>
                <span>{planetName}</span>
                <img src={planetImg} alt={"PlanetImg"} className={"PlanetImg"}/>
            </div>

            <span>{hasWater}</span>
            <span>{canBeLivedOn}</span>

        </div>
    )
}

