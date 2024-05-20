import { Link } from "react-router-dom"
import styles from "./SeasonCard.module.css"

const SeasonCard = (props: any) => {
  return (
    <Link target="_blank" to="https://www.netflix.com/hu-en/title/80211991" className={styles.seasonCard}>
        <h2>You {props.title}.évad</h2>
        <img loading="lazy" src={props.source} alt={props.alt} />
    </Link>
  )
}

export default SeasonCard