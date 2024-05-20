import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import styles from "./Seasons.module.css"
import SeasonCard from "../../components/SeasonCard/SeasonCard"

import SeasonOneYou from "../../assets/images/You_Season_1.jpg"
import SeasonTwoYou from "../../assets/images/You_Season_2.jpg"
import SeasonThreeYou from "../../assets/images/You_Season_3.jpg"
import SeasonFourYou from "../../assets/images/You_Season_4.jpg"

const Seasons = () => {
  return (
    <>
        <Navbar />
        <main className={styles.seasonsMain}>
            <section className={styles.seasonTitle}>
                <h1>Évadok</h1>
            </section>
            <section className={styles.seasons}>
                <SeasonCard source={SeasonOneYou} alt="Season One of You" title="1" />
                <SeasonCard source={SeasonTwoYou} alt="Season Two of You" title="2" />
                <SeasonCard source={SeasonThreeYou} alt="Season Three of You" title="3" />
                <SeasonCard source={SeasonFourYou} alt="Season Four of You" title="4" />
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Seasons