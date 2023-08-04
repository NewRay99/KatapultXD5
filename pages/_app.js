import Navbar from "../components/Navbar";
import "../styles/globals.css";

import Transition from "../components/Transition";

// router
import { useRouter } from "next/router";
// framer motion
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="h-full">
        <Transition />
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
