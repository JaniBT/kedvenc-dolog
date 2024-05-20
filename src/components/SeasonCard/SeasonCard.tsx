import { Link } from "react-router-dom"
import styles from "./SeasonCard.module.css"

const SeasonCard = (props: any) => {
  return (
    <Link to="https://www.netflix.com/hu-en/title/80211991" className={styles.seasonCard}>
        <h2>You {props.title}.évad</h2>
        <img src={props.source} alt={props.alt} />
    </Link>
  )
}

export default SeasonCard