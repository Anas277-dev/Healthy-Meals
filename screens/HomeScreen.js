import React, { useState, useRef } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import About from "../components/About";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import Pricing from "../components/Pricing";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HomeScreen() {
  const [activeSection, setActiveSection] = useState("Home");
  const scrollViewRef = useRef(null);
  const sectionYOffsets = useRef({});

  const handleSectionLayout = (name, event) => {
    const y = event.nativeEvent.layout.y;
    sectionYOffsets.current[name] = y;
  };

  const handleNavigate = (item) => {
    setActiveSection(item);

    let targetKey = item;
    if (item === "Home") targetKey = "Home";
    else if (item === "About Us") targetKey = "About Us";
    else if (item === "Our Services" || item === "Services" || item === "Meal Plans") targetKey = "Services";
    else if (item === "Advantages") targetKey = "Advantages";
    else if (item === "Growth Plans" || item === "Checkout") targetKey = "Growth Plans";
    else if (item === "Blogs") targetKey = "Blogs";
    else if (item === "Contact Us" || item === "Contact") targetKey = "Contact Us";

    const targetY = sectionYOffsets.current[targetKey] ?? 0;
    
    if (typeof window !== "undefined") {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
    if (scrollViewRef.current?.scrollTo) {
      scrollViewRef.current.scrollTo({ y: targetY, animated: true });
    }
  };


  return (
    <SafeAreaView className="flex-1 w-full bg-background min-h-screen relative">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <View className="flex-1 w-full bg-[#F7F8F4]">
        <View onLayout={(e) => handleSectionLayout("Home", e)}>
          <Hero
            onExplore={() => handleNavigate("Growth Plans")}
            onLearnMore={() => handleNavigate("About Us")}
          />
        </View>

        <StatsBar />

        <View onLayout={(e) => handleSectionLayout("About Us", e)}>
          <About onMoreAboutUs={() => handleNavigate("About Us")} />
        </View>

        <View onLayout={(e) => handleSectionLayout("Services", e)}>
          <Services
            onSelectService={() => handleNavigate("Growth Plans")}
            onViewAllServices={() => handleNavigate("Services")}
          />
        </View>

        <View onLayout={(e) => handleSectionLayout("Advantages", e)}>
          <Advantages
            onDiscoverAdvantages={() => handleNavigate("Advantages")}
          />
        </View>

        <View onLayout={(e) => handleSectionLayout("Growth Plans", e)}>
          <Pricing
            onSelectPlan={() => handleNavigate("Growth Plans")}
            onViewAllPlans={() => handleNavigate("Growth Plans")}
          />
        </View>

        <HowItWorks />

        <View onLayout={(e) => handleSectionLayout("Blogs", e)}>
          <Testimonials />
        </View>

        <FAQ />

        <CTABanner onGetStarted={() => handleNavigate("Growth Plans")} />

        <View onLayout={(e) => handleSectionLayout("Contact Us", e)}>
          <Footer onNavigate={handleNavigate} />
        </View>
      </View>


      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </SafeAreaView>
  );
}


