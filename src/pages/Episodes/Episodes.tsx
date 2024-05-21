import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import { Link } from "react-router-dom"

import styles from "./Episodes.module.css"
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard"

import { seasonOneEpisodes, seasonTwoEpisodes, seasonThreeEpisodes, seasonFourEpisodes, Episode } from "../../_lib/YOUEpisodes"

import { useState } from "react"

const Episodes = () => {
    const [season, setSeason] = useState('1')

    const handleSelection = (e: any) => {
        setSeason(e.target.value)
    }

    const renderEpisodes = () => {
        switch (season) {
            case "1":
                return seasonOneEpisodes.map((episode: Episode) => ( <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} /> ))
            case "2":
                return seasonTwoEpisodes.map((episode: Episode) => ( <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} /> ))
            case "3":
                return seasonThreeEpisodes.map((episode: Episode) => ( <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} /> ))
            case "4":
                return seasonFourEpisodes.map((episode: Episode) => ( <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} /> ))
            default:
                return seasonOneEpisodes.map((episode: Episode) => ( <EpisodeCard key={episode.id} title={episode.title} paragraph={episode.description} /> ))
        }
    }

  return (
    <>
        <Navbar />
        <main className={styles.episodesMain}>
            <section className={styles.episodesTitle}>
                <h1>Epizódok</h1>
            </section>
            <section className={styles.episodes}>
                <select name="selectSeason" id="seasonSelector" value={season} onChange={handleSelection}>
                    <option value="1">1. évad</option>
                    <option value="2">2. évad</option>
                    <option value="3">3. évad</option>
                    <option value="4">4. évad</option>
                </select>
                <div className={styles.allEpisodes}>
                    {renderEpisodes()}
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