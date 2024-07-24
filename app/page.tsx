import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Spotlight from "@/components/Spotlight";
import SubscriptionForm from "@/components/SubscriptionForm";
import WhyUs from "@/components/WhyUs";
import Workshop from "@/components/Workshop";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
      <div className="lg:px-0 px-6 py-12 mx-auto container">
        <Hero />
        <Offer />
        <AboutUs />
        <WhyUs />
        <div className="md:block hidden">
          <Spotlight />
        </div>
        <div className="md:hidden block">
          <Workshop />
        </div>
        <SubscriptionForm />
        <Footer />
      </div>
    </main>
  );
}
