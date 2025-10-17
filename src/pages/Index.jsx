import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import PageTransition from "../components/pagetransition";

const Index = () => {
  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
