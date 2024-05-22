import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./Plot.module.css"

const Plot = () => {
  return (
    <>
        <Navbar />
        <main className={styles.plotMain}>
            <section className={styles.plotTitle}>
                <h1>Cselekmény</h1>
            </section>
            <section className={styles.plotDescription}>
                <article>
                    
                </article>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Plot