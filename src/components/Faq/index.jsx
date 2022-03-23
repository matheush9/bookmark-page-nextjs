import styles from "./faq.module.scss";
import Image from "next/image";

export default function Faq() {
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
          <div>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>

        <div className={styles.question}>
          <h3>How can i request a new browser?</h3>
          <div>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>

        <div className={styles.question}>
          <h3>Is there a mobile app?</h3>
          <div>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>

        <div className={styles.question}>
          <h3>What about other Chromium browsers?</h3>
          <div>
            <img src="/images/icon-arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.btn}>
          <button>More Info</button>
        </div>
    </div>
  );
}
