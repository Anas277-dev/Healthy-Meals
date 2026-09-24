import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ArrowRight } from "lucide-react-native";

export default function CTABanner({ onGetStarted }) {
  return (
    <View className="w-full bg-[#1B3620] py-8 sm:py-10 lg:py-12 border-b border-[#2E5033] relative overflow-hidden">
      
      {/* Background Organic Leaf Foliage - Full Bleed 100% Width Cover */}
      <Image
        source={require("../assets/cta_banner_bg.png")}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="w-full h-full opacity-90"
        alt="CTA background"
      />
      {/* Soft Overlay Tint for legibility across full width */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        className="bg-[#0E2616]/40"
      />

      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HORIZONTAL FLEX BANNER */}
        <View className="flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-8">
          
          {/* Left Text Block */}
          <View className="space-y-1 flex-1">
            {/* Top Tag */}
            <Text className="text-xs font-bold text-[#A7C898] tracking-[0.2em] uppercase">
              READY TO START?
            </Text>

            {/* Main Headline - Single Line on Desktop/Tablet */}
            <Text className="text-xl sm:text-2xl lg:text-3xl xl:text-[34px] font-serif font-bold text-white tracking-tight leading-tight lg:whitespace-nowrap">
              Transform Your Health, One Meal At A Time
            </Text>

            {/* Subtitle - Crisp font readability */}
            <Text className="text-sm sm:text-base text-[#E3EFE0] leading-relaxed pt-1 font-medium drop-shadow-sm">
              Fresh. Nutritious. Convenient. Join thousands of happy customers today.
            </Text>
          </View>

          {/* Right White Button - Rounded Pill shape matching reference */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onGetStarted}
            className="bg-white hover:bg-[#F2F7EF] px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl flex-row items-center space-x-2.5 self-start lg:self-auto shadow-md transition-all cursor-pointer shrink-0"
          >
            <Text className="text-[#142B1A] font-bold text-xs sm:text-sm tracking-wide">
              Get Started Today
            </Text>
            <ArrowRight size={16} color="#142B1A" strokeWidth={2.2} />
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}




