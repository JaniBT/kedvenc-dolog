import Navbar from "../../components/Navbar/Navbar.tsx"
import styles from "./Home.module.css"

import Footer from "../../components/Footer/Footer.tsx"

import Video from "../../components/Video/Video.tsx"

const Home = () => {

  return (
    <>
        <Navbar />
        <main className={styles.mainWrapper}>
          <section className={styles.heroSection}>
            <h1>Love Chooses <span className={styles.titleYou}>YOU</span></h1>
            <Video />
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Home