import styles from "./features.module.scss";
import Image from "next/image";

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

      <div className={styles.features}>
        <div className={styles.simple}>
          <div className={styles.container}>
            <div>
              <img src="/images/illustration-features-tab-1.svg" alt="" />
            </div>
            <div className={styles.blueBg}></div>
          </div>

          <div className={styles.text}>
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favorite sites.
            </p>
            <button>More Info</button>
          </div>
        </div>

        <div className={styles.speedy}>
          <div className={styles.container}>
            <div>
              <img src="/images/illustration-features-tab-2.svg" alt="" />
            </div>
            <div className={styles.blueBg}></div>
          </div>

          <div className={styles.text}>
            <h3>Inteligent search</h3>
            <p>
              Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks
            </p>
            <button>More Info</button>
          </div>
        </div>

        <div className={styles.easy}>
          <div className={styles.container}>
            <div>
              <img src="/images/illustration-features-tab-3.svg" alt="" />
            </div>
            <div className={styles.blueBg}></div>
          </div>

          <div className={styles.text}>
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
            </p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
