import styles from "./Button.module.css";

function Button() {
  return (
    <>
      <button className={styles.btn}>Click me!</button>
      {/* C1 */}
      {/* <button className={`${styles.btn} ${styles.active}`}>Click me!</button> */}

      {/* C2 */}
      <button className={[styles.btn, styles.active].join(" ")}>
        Click me!
      </button>
    </>
  );
}

export default Button;
