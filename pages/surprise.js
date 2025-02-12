import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Surprise.module.css";

export default function Surprise() {
  const [showLoveText, setShowLoveText] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    // Show "I LOVE YOU" after 5 seconds
    const textTimer = setTimeout(() => {
      setShowLoveText(true);
    }, 5000);

    // Start fireworks after "I LOVE YOU" appears
    const fireworksTimer = setTimeout(() => {
      setShowFireworks(true);
    }, 5500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fireworksTimer);
    };
  }, []);

  return (
    <div className={styles.surpriseContainer}>
      {/* Fireworks Animation */}
      {showFireworks && (
        <div className={styles.fireworks}>
          <div className={styles.firework}></div>
          <div className={styles.firework}></div>
          <div className={styles.firework}></div>
        </div>
      )}

      {/* GIF appears first for 5 seconds */}
      {!showLoveText && (
        <motion.img
          src="/images/VanMai.gif" // Place GIF in "public/images/"
          alt="Valentine Surprise"
          className={styles.surpriseImage}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}

      {/* "I LOVE YOU" appears after 5 seconds */}
      {showLoveText && (
        <motion.h1
          className={styles.loveText}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1 }}
        >
          I LOVE YOU ❤️
        </motion.h1>
      )}

      {/* Back Button */}
      <Link href="/">
        <motion.button
          className={styles.backButton}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          Go Back
        </motion.button>
      </Link>
    </div>
  );
}
