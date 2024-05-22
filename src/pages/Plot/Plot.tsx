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
                    <h2>Első évad</h2>
                    <p>Joe titokban követi Beck minden lépését, a közösségi médiában található információk és a kémkedés segítségével manipulálja az életét, hogy közelebb kerülhessen hozzá. A kapcsolatuk előrehaladtával Joe egyre féltékenyebbé és birtoklóbbá válik, és mindent megtesz annak érdekében, hogy eltávolítsa az útból azokat, akiket riválisnak tart, akár gyilkosság árán is.</p>
                    <h2>Második évad</h2>
                    <p>Joe Los Angelesbe menekül, hogy új életet kezdjen és elkerülje a múltbeli tettei következményeit. Új személyazonosságot vesz fel, és itt találkozik Love Quinn-nel, egy karizmatikus és összetett nővel, aki szintén sötét titkokat rejteget. Ahogy a kapcsolatuk mélyül, Joe rádöbben, hogy Love talán még nála is veszélyesebb.</p>
                    <h2>Harmadik évad</h2>
                    <p>Joe és Love új életet kezdenek, ezúttal házasként és friss szülőkként egy csendes külvárosi közösségben. Azonban a kísértések és régi szokások nem maradnak el. Joe új megszállottja egy szomszéd, miközben Love is próbálja kezelni saját démonjait. A pár kapcsolata egyre feszültebbé válik, ahogy a régi és új bűnök felszínre kerülnek.</p>
                    <h2>Negyedik évad</h2>
                    <p>A történet folytatódik, új helyszínekkel és karakterekkel bővülve, miközben Joe próbálja megtalálni a belső békét és a valódi szerelmet. Az új évadok folyamatosan újabb fordulatokat és meglepetéseket tartogatnak a nézők számára.</p>
                    <p>A "You" sorozat központi témája Joe Goldberg megszállottsága és az, hogy milyen messzire hajlandó elmenni azért, hogy elérje, amit akar. Az általa okozott károk és az erőszak folyamatosan növekvő spirálja teszi a sorozatot izgalmassá és feszülté.</p>
                </article>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Plot