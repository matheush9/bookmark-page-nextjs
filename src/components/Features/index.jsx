import styles from './features.module.scss'

export default function Features() {
  return (
    <div className={styles.component}>
      <div>
        <h1>Features</h1>
        <p>Our aim is to make quick and easy for you to acess your favourite websites. Your bookmark sync between your devices so you can acess them on go.</p>
      </div>

      <div>
        <div>Simple Bookmarking</div>
        <div>Speedy Searching</div>
        <div>Easy sharing</div>
      </div>
    </div>
  )
}