import styles from "./EpisodeCard.module.css"

const EpisodeCard = (props: any) => {
  return (
    <div className={styles.episodeCard}>
        <img src="https://placehold.co/400x220?text=You+Episode" alt="Placeholder for the episode" loading="lazy" />
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default EpisodeCard