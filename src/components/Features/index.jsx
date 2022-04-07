import React, { useState } from "react";
import styles from "./features.module.scss";
import Image from "next/image";

export default function Features() {
  const [stateSimple, setStateSimple] = useState(true);
  const [stateSpeedy, setStateSpeedy] = useState(false);
  const [stateEasy, setStateEasy] = useState(false);

  const changeStyleSimple = () => {
    setStateSpeedy(false), setStateEasy(false);
    setStateSimple(true);
  };

  const changeStyleSpeedy = () => {
    setStateEasy(false), setStateSimple(false);
    setStateSpeedy(true);
  };

  const changeStyleEasy = () => {
    setStateSpeedy(false), setStateSimple(false);
    setStateEasy(true);
  };

  return (
    <div id="features" className={styles.component}>
      <div className={styles.featuresText}>
        <h2>Features</h2>
        <p>
          Our aim is to make quick and easy for you to acess your favourite
          websites. Your bookmark sync between your devices so you can acess
          them on go.
        </p>
      </div>

      <div className={styles.items}>
        <div>
          <p
            onClick={changeStyleSimple}
            className={stateSimple ? styles.pActive : ""}
          >
            {" "}
            Simple Bookmarking
          </p>
          <div className={stateSimple ? styles.wrapper : ""}></div>
        </div>
        <div>
          <p
            onClick={changeStyleSpeedy}
            className={stateSpeedy ? styles.pActive : ""}
          >
            Speedy Searching
          </p>
          <div className={stateSpeedy ? styles.wrapper : ""}></div>
        </div>
        <div>
          <p
            onClick={changeStyleEasy}
            className={stateEasy ? styles.pActive : ""}
          >
            Easy Sharing
          </p>
          <div className={stateEasy ? styles.wrapper : ""}></div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={stateSimple ? styles.simple : styles.displayNone}>
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

        <div className={stateSpeedy ? styles.speedy : styles.displayNone}>
          <div className={styles.container}>
            <div>
              <img src="/images/illustration-features-tab-2.svg" alt="" />
            </div>
            <div className={styles.blueBg}></div>
          </div>

          <div className={styles.text}>
            <h3>Inteligent search</h3>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks
            </p>
            <button>More Info</button>
          </div>
        </div>

        <div className={stateEasy ? styles.easy : styles.displayNone}>
          <div className={styles.container}>
            <div>
              <img src="/images/illustration-features-tab-3.svg" alt="" />
            </div>
            <div className={styles.blueBg}></div>
          </div>

          <div className={styles.text}>
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}
