import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PreRegister } from "@/components/pre-register";
import { Pricing } from "@/components/pricing";
import { Story } from "@/components/story";
import { Testimonials } from "@/components/testimonials";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Story />
        <Pricing />
        <Testimonials />
        <Contact />
        <PreRegister />
      </main>

      <Footer />
    </div>
  );
};
export default App;
