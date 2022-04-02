import styles from "./topbar.module.scss";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className={styles.component}>
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <img src="/images/logo-bookmark.svg" alt="" />
        </div>
        <div className={styles.navIcon}>
          <div className={styles.hamburger}>
            <img src="/images/icon-hamburger.svg" alt="" />
          </div>
          <div className={styles.close}>
            <img src="/images/icon-close.svg" alt="" />
          </div>
        </div>

        <div className={styles.navbarDesktop}>
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>CONTACT</p>
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
