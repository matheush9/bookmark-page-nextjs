import styles from "./footer.module.scss";
import Image from "next/image";


export default function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <h3>BOOKMARK</h3>
        </div>
        <div className={styles.navbarDesktop}>
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>CONTACT</p>
        </div>
      </div>

      <div className={styles.socialLogos}>
        <div>
          <img src="/images/icon-facebook.svg" alt="" />
        </div>

        <div>
        <img src="/images/icon-twitter.svg" alt="" />
        </div>
      </div>

    </div>
  );
}
