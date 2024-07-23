import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Spotlight from "@/components/Spotlight";
import SubscriptionForm from "@/components/SubscriptionForm";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
      <div className="flex flex-col items-center lg:px-40 px-6 py-12">
        <Hero />
        <Offer />
        <AboutUs />
        <WhyUs />
        <Spotlight />
        <SubscriptionForm />
        <Footer />
      </div>
    </main>
  );
}
