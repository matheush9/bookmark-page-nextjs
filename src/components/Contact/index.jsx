import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.component}>
      <div className={styles.stayUp}>
        <p>3 5, 0 0 0 + &nbsp;A L R E A D Y &nbsp; J O I N E D</p>
        <h2>Stay up-to-date with what we're doing</h2>
        <div className={styles.email}>
          <input
            placeholder="Enter your email adress"
            type="email"
            name=""
            id=""
          />
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}
