import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import { Link } from "react-router-dom"

import styles from "./Episodes.module.css"
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard"

import { seasonOneEpisodes, Episode } from "../../_lib/YOUEpisodes"

const Episodes = () => {
  return (
    <>
        <Navbar />
        <main className={styles.episodesMain}>
            <section className={styles.episodesTitle}>
                <h1>Epizódok</h1>
            </section>
            <section className={styles.episodes}>
                <select name="selectSeason" id="seasonSelector">
                    <option value="1">1. évad</option>
                    <option value="2">2. évad</option>
                    <option value="3">3. évad</option>
                    <option value="4">4. évad</option>
                </select>
                <div className={styles.allEpisodes}>
                    {seasonOneEpisodes.map((episode: Episode) => (
                        <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} />
                    ))}
                </div>
            </section>
            <section className={styles.footerOfEpisodes}>
                <div>
                    <h4>Műfaj:</h4>
                    <p>Thriller</p>
                </div>
                <div>
                    <h4>Nézd meg a Netflixen!</h4>
                    <Link target="_blank" to="https://www.netflix.com/hu-en/title/80211991">Tovább az oldalra</Link>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Episodes