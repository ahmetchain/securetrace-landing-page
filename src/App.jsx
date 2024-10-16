import { useRef } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SectionHeader from "./Components/SectionHeader";
import FeatureSections from "./Components/FeatureSection";
import InfiniteCarousel from "./Components/İnfiniteSlider";
import Security from "./assets/img/Security.jpg";
import Hash from "./assets/img/hash.jpeg";
import secureTrace from "./assets/img/1.png";
import secureTrace2 from "./assets/img/2.png";
import secureTrace3 from "./assets/img/3.png";
import secureTrace4 from "./assets/img/4.png";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import VideoSection from "./Components/ServerVideo";
import DataSimplificationSection from "./Components/DataSimplification";
import LayeredSupportSection from "./Components/LayerSupport";
function App() {
  const images = [secureTrace, secureTrace2, secureTrace3, secureTrace4];
  const carouselRef = useRef(null);
  const nextSlide = () => {
    carouselRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="h-screen">
        <Header />
        <HeroSection scroll={nextSlide} />
        <div className="px-20 flex flex-col gap-y-20 mb-32">
          <AboutSection />
          <div ref={carouselRef}>
            <SectionHeader title={"Who We Are"} bg={true} />
          </div>
          <FeatureSections
            Img={Security}
            Title={"Elevating Security for Modern Infrastructure"}
            Paragraph={
              "SecureTrace is committed to ensuring the integrity and security of your systems with state-of-the-art technology and comprehensive monitoring solutions."
            }
            Button={"Contact Us"}
          />
          <FeatureSections
            Img={Hash}
            Title={"Seamless Blockchain Integration"}
            Paragraph={
              " Our solutions incorporate blockchain technology to provide an additional layer of security, ensuring immutable log records and reliable audit trails for your critical infrastructure."
            }
            Button={"Contact Us"}
            Reverse={true}
          />
          <HowItWorks />
        </div>
        <VideoSection />
        <DataSimplificationSection />
        <div className="px-10 mt-10 lg:mt-0 mb-10 lg:mb-0">
          <InfiniteCarousel images={images} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
