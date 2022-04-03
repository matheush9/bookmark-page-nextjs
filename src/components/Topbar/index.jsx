import React, { useState } from "react";
import styles from "./topbar.module.scss";
import Image from "next/image";

export default function Topbar() {
  const [stateHamburger, setStateHamburger] = useState(true);
  const [stateClose, setStateClose] = useState(false);

  const ChangeStateHamburger = () => {
    setStateHamburger(false), setStateClose(true);
  };

  const ChangeStateClose = () => {
    setStateHamburger(true), setStateClose(false);
  };

  return (
    <div className={styles.component}>
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <img src="/images/logo-bookmark.svg" alt="" />
        </div>
        <div className={styles.navIcon}>
          <div
            onClick={ChangeStateHamburger}
            className={stateHamburger ? styles.hamburger : styles.displayNone}
          >
            <img src="/images/icon-hamburger.svg" alt="" />
          </div>
        </div>

        <div className={styles.navbarDesktop}>
          <p>FEATURES</p>
          <p>PRICING</p>
          <p>CONTACT</p>
          <button>LOGIN</button>
        </div>

        <div className={stateClose ? styles.navbarMobile : styles.displayNone}>
          <div className={styles.close}>
            <img
              onClick={ChangeStateClose}
              className={stateClose ? styles.close : styles.displayNone}
              src="/images/icon-close.svg"
              alt=""
            />
          </div>
          <div className={styles.wrapper}></div>
          <p>FEATURES</p>
          <div className={styles.wrapper}></div>
          <p>PRICING</p>
          <div className={styles.wrapper}></div>
          <p>CONTACT</p>
          <div className={styles.wrapper}></div>

          <p className={styles.login}>LOGIN</p>
        </div>
      </div>
    </div>
  );
}
