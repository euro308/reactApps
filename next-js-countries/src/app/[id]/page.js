import styles from "@/app/[id]/page.module.css";
import Link from "next/link";

export default async function Home({params}) {

    const response =  await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
    const data =  await response.json();

    const name = data[0].name.common
    const officialName = data[0].name.official
    const flagDesc = data[0].flags.alt
    const area = data[0].area
    const population = data[0].population


    return (
        <main className={styles.main}>
            <div className={styles.country}>
                <h1>{name}</h1>
                <p>
                    <span>Official Name: {officialName}</span>
                </p>
                <p>
                    <span>Flag Description: {flagDesc}</span>
                </p>
                <p>
                    <span>Area: {area} meters</span>
                </p>
                <p>
                    <span>Population: {population}</span>
                </p>
                <p>
                    <Link href={"/"}><h2>Go Back</h2></Link>
                </p>
            </div>
        </main>
    )
}
