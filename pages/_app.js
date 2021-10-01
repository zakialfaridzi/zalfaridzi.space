import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
