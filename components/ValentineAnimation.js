import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Valentine.module.css";

export default function ValentineAnimation() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate floating hearts and flowers dynamically
    const createHeart = () => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100, // Random position
          animationDuration: Math.random() * 2 + 3, // Random duration
        },
      ]);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {/* Happy Valentine’s Day Text Animation */}
      <motion.h1
        className={styles.valentineText}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        💖 Happy Valentine’s Day 💖
      </motion.h1>

      {/* Floating Hearts & Flowers */}
      <div className={styles.heartsContainer}>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className={styles.heart}
            style={{
              left: `${heart.left}%`,
              animationDuration: `${heart.animationDuration}s`,
            }}
          >
            {Math.random() > 0.5 ? "❤️" : "🌸"}
          </motion.div>
        ))}
      </div>

      {/* Click Me Button - Navigate to Surprise Page */}
      <Link href="/surprise">
        <motion.button
          className={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Click Me
        </motion.button>
      </Link>
    </div>
  );
}
