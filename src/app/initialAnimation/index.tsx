"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <motion.div
      style={{ display: "grid", placeItems: "center", height: "100vh" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/logo.png" alt="Logo" width={375} height={150} />
      </motion.div>
    </motion.div>
  );
}
