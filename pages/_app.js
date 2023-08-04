import Navbar from "../components/Navbar";
import "../styles/globals.css";

import Transition from "../components/Transition";
import { useInView } from "react-intersection-observer";

// router
import { useRouter } from "next/router";
// framer motion
import { AnimatePresence, motion } from "framer-motion";
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
function Square() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="square"
    ></motion.div>
  );
}

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
