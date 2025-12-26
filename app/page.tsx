import Header from "@/components/Header";
import About from "@/components/About";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

