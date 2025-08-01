import clsx from "clsx";
import styles from "./Button.module.css";

function Button({ primary }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    "d-flex": false,
  });
  return (
    <>
      <button className={classes}>Click me!</button>
      {/* C1 */}
      {/* <button className={`${styles.btn} ${styles.active}`}>Click me!</button> */}

      {/* C2 */}
      {/* <button className={[styles.btn, styles.active].join(" ")}>
        Click me!
      </button> */}

      {/* C3 */}
      {/* <button className={clsx(styles.btn, { [styles.active]: true })}>
        Click me!
      </button> */}
    </>
  );
}

export default Button;
