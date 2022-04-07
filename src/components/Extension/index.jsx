import styles from "./extension.module.scss";
import Image from "next/image";

export default function Extension() {
  return (
    <div id="extensions" className={styles.component}>
      <div>
        <div className={styles.downloadText}>
          <h2>Download the extension</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>

        <div className={styles.browsersContainer}>
          <div className={styles.browser}>
            <div className={styles.browserLogo}>
              <img src="/images/logo-chrome.svg" alt="" />
            </div>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <div>
              <img src="/images/bg-dots.svg" alt="" />
            </div>
            <button>Add & Install Extension</button>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserLogo}>
              <img src="/images/logo-firefox.svg" alt="" />
            </div>
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <div>
              <img src="/images/bg-dots.svg" alt="" />
            </div>
            <button>Add & Install Extension</button>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserLogo}>
              <img src="/images/logo-opera.svg" alt="" />
            </div>
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <div>
              <img src="/images/bg-dots.svg" alt="" />
            </div>
            <button>Add & Install Extension</button>
          </div>
        </div>
      </div>
    </div>
  );
}
