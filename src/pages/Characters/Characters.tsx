import Character from "../../components/Character/Character"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import styles from "./Characters.module.css"

import { MainCharacterList, CharacterInterface } from "../../_lib/YOUCharacters"

const Characters = () => {
  return (
    <>
        <Navbar />
        <main className={styles.charactersWrapper}>
            <section className={styles.charactersTitle}>
                <h1>Szereplők és Karaktereik</h1>
            </section>
            <section className={styles.allCharacters}>
                <h2>Főszereplők</h2>
                <div className={styles.characters}>
                    {MainCharacterList.map((character: CharacterInterface) => (
                        <Character title={character.name} imgSource={character.image} paragraph={character.description} />
                    ))}
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Characters