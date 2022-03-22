import styles from "./extension.module.scss";

export default function Extension() {
  return (
    <div className={styles.component}>
      <div>
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>

        <div className={styles.browsers}>
          <div>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
          </div>
          <div>
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
          </div>
          <div>
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
