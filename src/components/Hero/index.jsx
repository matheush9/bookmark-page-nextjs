import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.component}>
      <div className={styles.simpleBook}>
        <h1>A Simple BookMark Manager</h1>
        <p>
          A simple and clean interface to organize your favorite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={styles.btns}>
          <button>Get it on Chrome</button>
          <button>Get it on Firefox</button>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.heroImg}>
          <img src="/images/illustration-hero.svg" alt="" />
        </div>
        <div className={styles.blueBg}></div>
      </div>
    </div>
  );
}
