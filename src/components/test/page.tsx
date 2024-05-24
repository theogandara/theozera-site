"use client";
import styles from "./test.module.scss";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Test() {
  const { x, y } = useMousePosition();
  const size = 350;
  const subVl = size / 2;

  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - subVl}px ${y - subVl}px`,
            WebkitMaskSize: `${size}px`,
            transition: { duration: 0 },
          }}
          transition={{ type: "tween", ease: "backOut" }}
        />

        <div className={styles.body} />
        <div className={styles.test} />
      </div>
    </div>
  );
}
