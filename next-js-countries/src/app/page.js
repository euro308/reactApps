import styles from './page.module.css';
import Link from 'next/link';
export default async function Home() {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  const countries = data.map(country => ({
    name: country.name.common,
    flag: country.flags.svg,
    officialName: country.name.official,
    region: country.region,
    capital: country.capital
  }));

  return (
    <main className={styles.main}>
      <div className={styles.items}>
        {countries.map((country, index) => (
          <div key={index} className={styles.country}>
            <h2>{country.name}</h2>
            <img src={country.flag} alt={`${country.name} flag`}></img>
            <span>Region: {country.region}</span>
            <span>Capital: {country.capital}</span>
            <Link href={`/${(country.name).toLowerCase()}`}>More info</Link>
          </div>
        ))};


      </div>
    </main>
  );
}