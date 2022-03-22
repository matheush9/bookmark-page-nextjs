import styles from "./features.module.scss";

export default function Features() {
  return (
    <div className={styles.component}>
      <div className={styles.featuresText}>
        <h1>Features</h1>
        <p>
          Our aim is to make quick and easy for you to acess your favourite
          websites. Your bookmark sync between your devices so you can acess
          them on go.
        </p>
      </div>

      <div className={styles.items}>
        <div>
          <p>Simple Bookmarking</p>
        </div>
        <div>
          <p>Speedy Searching</p>
        </div>
        <div>
          <p>Easy Sharing</p>
        </div>
      </div>
    </div>
  );
}
