import styles from './page.module.css';
import Link from 'next/link';
export default async function Home() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();


  return (
    <main className={styles.main}>
      <div className={styles.items}>
        {data.map((country) => (
          <div key={country.name.common} className={styles.country}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.svg} alt={`${country.name.common} flag`}></img>
            <span>Region: {country.region}</span>
            <span>Capital: {country.capital}</span>
            <Link href={`/${(country.name.common).toLowerCase()}`}>More info</Link>
          </div>
        ))};


      </div>
    </main>
  );
}