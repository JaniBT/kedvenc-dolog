import styles from "./Footer.module.css"
import { Link } from "react-router-dom"

import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h4>A weboldalt Csordás János készítette</h4>
        <div className={styles.link}>
          <Link to="https://github.com/JaniBT"><BsGithub /></Link>
          <div className={styles.tooltip}>Github Link</div>
        </div>
        <p>This website was made for a school project (please don't sue me Netflix)</p>
        <p><strong>I do not own any videos or pictures used on the website!</strong></p>
    </footer>
  )
}

export default Footer