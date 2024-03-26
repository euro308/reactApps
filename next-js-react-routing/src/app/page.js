import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                EURO'S GAME LIST
            </h1>
            <p className={styles.description}>
                Here is a list of my few favorite games. You can view the games, edit their attributes and save the new
                information.
            </p>
            <Link href={"/games"}>The Games Dashboard</Link>
        </main>
    );
}
