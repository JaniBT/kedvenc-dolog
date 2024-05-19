import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  const mainWrapperStyle = {
    backgroundImage: 'url("/mainbackground.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100dvh'
  }

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
        <header className={styles.navigationWrapper}>
            <nav>
                <Link to="/">Kezdőlap</Link>
                <Link to="/seasons">Évadok</Link>
                <Link to="/episodes">Részek</Link>
                <Link to="/actors">Szereplők</Link>
            </nav>
        </header>
        <main className={`${styles.mainContent}`} >
          <section className={styles.mainWrapper} style={mainWrapperStyle}>
            <motion.div className={styles.motionTitle}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            >
              <h1>YOU</h1>
            </motion.div>
          </section>
        </main>
    </>
  )
}

export default Home