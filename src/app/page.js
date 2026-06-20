import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Origins from "./components/Origins";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <>
      {/*
        Navbar est fixed → elle flotte au-dessus de tout.
        Le Hero fait 100svh et absorbe l'espace de la navbar.
        Les sections suivantes commencent naturellement après le Hero.
      */}
      <Navbar />
      <GoogleAnalytics />

      <main>
        <Hero />

        <FadeInSection>
          <Stats />
        </FadeInSection>

        <FadeInSection>
          <About />
        </FadeInSection>

        <FadeInSection>
          <Products />
        </FadeInSection>

        <FadeInSection>
          <Origins />
        </FadeInSection>

        <FadeInSection>
          <Contact />
        </FadeInSection>

        <Footer />
      </main>

      <WhatsAppButton />
    </>
  );
}