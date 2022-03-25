import React, { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";

export default function Faq() {
  const [stateWhatIs, setStateWhatIs] = useState(false);
  const [stateHowCan, setStateHowCan] = useState(false);
  const [stateIsThere, setStateIsThere] = useState(false);
  const [stateWhatAbout, setStateWhatAbout] = useState(false);



  const changeStyleWhatIs = () => {
    stateWhatIs ? setStateWhatIs(false) : setStateWhatIs(true);
  };

  const changeStyleHowCan = () => {
    stateHowCan ? setStateHowCan(false) : setStateHowCan(true);
  };

  const changeStyleIsThere = () => {
    stateIsThere ? setStateIsThere(false) : setStateIsThere(true);
  };

  const changeStyleWhatAbout = () => {
    stateWhatAbout ? setStateWhatAbout(false) : setStateWhatAbout(true);
  };

  return (
    <div className={styles.component}>
      <div className={styles.faqText}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please fell free to email us.
        </p>
      </div>

      <div className={styles.questions}>
        <div className={styles.question}>
          <h3>What is Bookmark</h3>
          <div className={stateWhatIs ? styles.rotateArrow : ''}>
            <img onClick={changeStyleWhatIs} src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>

        <div className={stateWhatIs ? styles.answer : styles.displayNone}>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro molestias assumenda minima quia dignissimos facilis corrupti sapiente? Porro ullam officiis ut temporibus quia veritatis distinctio accusantium fugiat nesciunt, beatae adipisci, quaerat optio pariatur magnam. Autem sit aliquid repudiandae quo debitis!
          </p>
        </div>

        <div className={styles.question}>
          <h3>How can i request a new browser?</h3>
          <div className={stateHowCan ? styles.rotateArrow : ''}>
            <img onClick={changeStyleHowCan} src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>
        <div className={stateHowCan ? styles.answer : styles.displayNone}>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro molestias assumenda minima quia dignissimos facilis corrupti sapiente? Porro ullam officiis ut temporibus quia veritatis distinctio accusantium fugiat nesciunt, beatae adipisci, quaerat optio pariatur magnam. Autem sit aliquid repudiandae quo debitis!
          </p>
        </div>

        <div className={styles.question}>
          <h3>Is there a mobile app?</h3>
          <div className={stateIsThere ? styles.rotateArrow : ''}>
            <img onClick={changeStyleIsThere} src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>
        
        <div className={stateIsThere ? styles.answer : styles.displayNone}>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro molestias assumenda minima quia dignissimos facilis corrupti sapiente? Porro ullam officiis ut temporibus quia veritatis distinctio accusantium fugiat nesciunt, beatae adipisci, quaerat optio pariatur magnam. Autem sit aliquid repudiandae quo debitis!
          </p>
        </div>

        <div className={styles.question}>
          <h3>What about other Chromium browsers?</h3>
          <div className={stateWhatAbout ? styles.rotateArrow : ''}>
            <img onClick={changeStyleWhatAbout} src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>

        <div className={stateWhatAbout ? styles.answer : styles.displayNone}>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro molestias assumenda minima quia dignissimos facilis corrupti sapiente? Porro ullam officiis ut temporibus quia veritatis distinctio accusantium fugiat nesciunt, beatae adipisci, quaerat optio pariatur magnam. Autem sit aliquid repudiandae quo debitis!
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        <button>More Info</button>
      </div>
    </div>
  );
}
