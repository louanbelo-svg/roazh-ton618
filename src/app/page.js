import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Origins from "./components/Origins";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <GoogleAnalytics />

      <Hero />

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

      <WhatsAppButton />
    </main>
  );
}