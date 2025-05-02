"use client";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import RoundNavbar from "@/components/RoundNavbar";
import Hero from "../components/Hero";
import ProblemSection from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import FeatureUseCaseSection from "@/components/FeatureUseCaseSection";
import RecommenderPricing from "@/components/RecommenderPricing";
import TestimonialSection from "@/components/TestimonialSection";
import AiFaq from "@/components/AiFaq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import GdprPopup from "@/components/GdprPopup";
import Script from "next/script"; // 🧠 Make sure to import this
import LoadingScreen from "@/components/LoadingScreen";



export default function Home() {
  return (
    <ParallaxWrapper>
      <main>
        {/* ✅ Loading Screen */}
        <LoadingScreen />
        <GdprPopup />
        <RoundNavbar />
        <Hero onGetStartedClick={() => console.log("Get Started clicked")} />
        <ProblemSection />
        <HowItWorks />
        <FeatureUseCaseSection />
        <RecommenderPricing />
        <TestimonialSection />
        <AiFaq />
        <CtaSection />
        
        <Footer />

        {/* ✅ Tawk.to Live Chat Integration */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                    s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6808abb8cc25131911e96575/1ipgttie0';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </main>
    </ParallaxWrapper>
  );
}
