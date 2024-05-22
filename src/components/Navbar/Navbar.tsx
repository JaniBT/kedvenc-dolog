import styles from "./NavStyles.module.css"
import NavLink from "./NavLink"
import { useEffect, useState, useRef } from "react"

import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const [hamburgerVisible, setHamburgerVisible] = useState(false)

    const handleHamburgerMenuOpening = () => {
      setHamburgerVisible(prev => !prev)
    }

    const handlePlayPause = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };

    const handleAudioEnd = () => {
        setIsPlaying(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll down
                setNavVisible(false);
            } else {
                // Scroll up
                setNavVisible(true);
            }

            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

  return (
    <>
      <header className={`${styles.navigationWrapper} ${navVisible ? styles.visible : styles.hidden}`}>
        <h1>YOU</h1>
        <nav>
            <NavLink to="/">Kezdőlap</NavLink>
            <NavLink to="/seasons">Évadok</NavLink>
            <NavLink to="/episodes">Epizódok</NavLink>
            <NavLink to="/characters">Szereplők</NavLink>
            <NavLink to="/plot">Cselekmény</NavLink>
            <button className={styles.volumeButton} onClick={handlePlayPause}>
                {isPlaying ? <FaVolumeUp /> : <FaVolumeOff />}
            </button>
        </nav>
        <div className={styles.hamburgerMenuOpener}>
            <RxHamburgerMenu onClick={handleHamburgerMenuOpening} />
        </div>
        <audio 
            ref={audioRef} 
            src="/audio/YOUMusic.mp3"
            onEnded={handleAudioEnd}
        />
      </header>
      <div className={`${styles.hamburgerMenu} ${hamburgerVisible ? styles.hamburgerMenuVisible : styles.hamburgerMenuHidden}`}>
        <div className={styles.hamburgerMenuTitle}>
          <h3>Menü</h3>
          <IoCloseOutline onClick={handleHamburgerMenuOpening} />
        </div>
        <NavLink to="/">Kezdőlap</NavLink>
        <NavLink to="/seasons">Évadok</NavLink>
        <NavLink to="/episodes">Epizódok</NavLink>
        <NavLink to="/characters">Szereplők</NavLink>
        <NavLink to="/plot">Cselekmény</NavLink>
        <button className={styles.volumeButton} onClick={handlePlayPause}>
            {isPlaying ? <FaVolumeUp /> : <FaVolumeOff />}
        </button>
      </div>
    </>
  )
}

export default Navbar