import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Details from "../components/Details";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Details />
      <Footer />
    </div>
  );
}
