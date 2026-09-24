import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react-native";

export default function About({ onMoreAboutUs }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;

  return (
    <View className="w-full bg-[#FFFFFF] pt-6 sm:pt-8 pb-16 sm:pb-20 overflow-hidden relative">
      
      {/* Soft Decorative Plant Watermark Vector in far right background */}
      <View className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Leaf size={420} color="#4D642B" />
      </View>

      {/* Main Grid Container aligned with header grid */}
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <View className="flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Overlapping Dual Images Composition */}
          <View className="w-full max-w-[540px] lg:max-w-none lg:w-[50%] relative min-h-[290px] sm:min-h-[380px] lg:min-h-[420px] justify-center mx-auto lg:mx-0">
            
            {/* 1. Main Large Food Image (Centered on mobile/tablet, w-[94%] & 1:1 Aligned with Header Logo on desktop) */}
            <View 
              className="w-[88%] sm:w-[84%] lg:w-[94%] mx-auto lg:ml-0 lg:mr-auto rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-gray-100"
              style={{ aspectRatio: 1.4 }}
            >
              <Image
                source={require("../assets/hero_banner_right_food.png")}
                className="w-full h-full"
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "90% 95%",
                }}
              />
            </View>

            {/* 2. Secondary Overlapping Small Image (75% inside big image, 25% hanging outside on left) */}
            <View 
              className="absolute -bottom-3 left-0 sm:left-[2%] lg:-left-12 w-[42%] sm:w-[38%] lg:w-[38%] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#14291B] z-20 bg-gray-100"
              style={{ aspectRatio: 1.35 }}
            >
              <Image
                source={require("../assets/hero_salad_bowl.png")}
                className="w-full h-full"
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 70%",
                }}
              />
            </View>

            {/* 3. Floating Badge Overlay ("Nourishing Lives Daily") */}
            <View className="absolute -bottom-2 sm:-bottom-1 left-[24%] sm:left-[25%] lg:left-[20%] bg-[#FDF8F0] px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-2xl flex-row items-center space-x-2.5 sm:space-x-3.5 border border-[#E5E9DF] z-30">
              <View className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EBF2DF] justify-center items-center">
                <Leaf size={18} color="#4D642B" />
              </View>
              <View>
                <Text className="text-xs sm:text-sm font-serif font-semibold text-[#14291B] tracking-wide leading-tight">
                  Nourishing
                </Text>
                <Text className="text-xs sm:text-sm font-serif font-semibold text-[#14291B] tracking-wide leading-tight">
                  Lives Daily
                </Text>
              </View>
            </View>

          </View>

          {/* RIGHT COLUMN: Brand Introduction Content */}
          <View className="w-full lg:w-[50%] max-w-[620px] space-y-4 sm:space-y-5 mt-4 lg:mt-0">
            
            {/* Small Category Section Tag */}
            <Text className="text-xs sm:text-sm font-bold text-[#5A685B] tracking-[0.2em] uppercase">
              ABOUT HEALTHIFY
            </Text>

            {/* Main Section Heading */}
            <View>
              <Text className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-extrabold text-[#14291B] tracking-tight leading-[1.15]">
                Your Trusted Healthy
              </Text>
              <Text className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-extrabold text-[#14291B] tracking-tight leading-[1.15]">
                Food Partner
              </Text>
            </View>

            {/* Paragraph Text Description */}
            <Text className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.
            </Text>

            {/* 3 Small Feature Points (Horizontal Row with Icons) */}
            <View className="flex-row flex-wrap items-center gap-y-3 gap-x-4 sm:gap-x-6 pt-1 pb-1">
              <View className="flex-row items-center space-x-2">
                <View className="w-8 h-8 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <Leaf size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-bold text-[#14291B]">
                  Freshly Prepared Daily
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <View className="w-8 h-8 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <ShieldCheck size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-bold text-[#14291B]">
                  Balanced Nutrition
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <View className="w-8 h-8 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <Sparkles size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-bold text-[#14291B]">
                  Great Taste
                </Text>
              </View>
            </View>

            {/* CTA Action Button */}
            <View className="pt-2">
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onMoreAboutUs}
                className="flex-row items-center bg-[#14291B] hover:bg-[#0A1810] px-7 py-3.5 rounded-full space-x-2.5 self-start shadow-md transition-all"
              >
                <Text className="text-white font-bold text-sm tracking-wide">
                  More About Us
                </Text>
                <ArrowRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>
    </View>
  );
}
