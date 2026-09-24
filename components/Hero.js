import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react-native";

export default function Hero({ onExplore, onLearnMore }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <View className="w-full relative bg-[#F7F8F4] overflow-hidden">
      {/* Full-bleed Desktop Background Banner (Visible only on desktop >= 1024px) */}
      {isDesktop && (
        <View className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            source={require("../assets/hero_banner_right_food.png")}
            className="w-full h-full"
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "right center",
            }}
          />
        </View>
      )}

      {/* Inner Content Container */}
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <View className="flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* LEFT CONTENT COLUMN */}
          <View className="w-full lg:w-[50%] max-w-[620px] space-y-4">
            
            {/* Main Headline */}
            <View className="p-0 m-0">
              <Text className="text-3xl sm:text-5xl lg:text-[58px] font-serif font-extrabold text-[#14291B] tracking-tight leading-[1.1]">
                Healthy Meals
              </Text>
              <Text className="text-3xl sm:text-5xl lg:text-[58px] font-serif font-extrabold text-[#4D642B] tracking-tight leading-[1.1] mt-1">
                Happier Lives
              </Text>
            </View>

            {/* Tagline Subtext */}
            <Text className="text-base sm:text-xl font-bold text-[#14291B] tracking-wide mt-2">
              Fresh. Nutritious. Convenient. Delivered to You.
            </Text>

            {/* Paragraph Description */}
            <Text className="text-sm sm:text-base text-[#3A4555] font-medium leading-relaxed max-w-xl">
              At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.
            </Text>

            {/* CTA Action Buttons */}
            <View className="flex-row flex-wrap items-center gap-3 pt-2 pb-3">
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onExplore}
                className="flex-row items-center bg-[#14291B] hover:bg-[#0A1810] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl space-x-3 shadow-md transition-all"
              >
                <Text className="text-white font-bold text-sm sm:text-base tracking-wide">
                  Explore Meal Plans
                </Text>
                <ArrowRight size={18} color="#FFFFFF" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onLearnMore}
                className="flex-row items-center bg-[#FDF8F0] hover:bg-white border-2 border-[#4D642B]/30 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl transition-all shadow-sm"
              >
                <Text className="text-[#14291B] font-bold text-sm sm:text-base">
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>

            {/* 3 Benefit Indicators (Clean Flex Wrap) */}
            <View className="flex-row flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-[#E5E9DF]">
              <View className="flex-row items-center space-x-2">
                <View className="w-7 h-7 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <CheckCircle2 size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-semibold text-[#14291B]">
                  Fresh Ingredients
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <View className="w-7 h-7 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <ShieldCheck size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-semibold text-[#14291B]">
                  Nutritionist Approved
                </Text>
              </View>

              <View className="flex-row items-center space-x-2">
                <View className="w-7 h-7 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <Truck size={16} color="#4D642B" />
                </View>
                <Text className="text-xs sm:text-sm font-semibold text-[#14291B]">
                  Delivered to Your Door
                </Text>
              </View>
            </View>

          </View>

          {/* RIGHT COLUMN (Desktop Overlays vs Dedicated Mobile Visual Card) */}
          {isDesktop ? (
            <View className="w-full lg:w-[48%] min-h-[380px] relative justify-between items-end">
              {/* Script Text Overlay on Desktop (Shifted further left onto clean cream background) */}
              <View className="absolute top-2 -left-12 lg:-left-24 z-20 items-center">
                <Text className="font-serif italic text-xl font-bold text-[#4D642B] tracking-wider transform -rotate-6">
                  Good Food
                </Text>
                <Text className="font-serif italic text-xl font-bold text-[#4D642B] tracking-wider transform -rotate-6">
                  Brighter You ⤵
                </Text>
              </View>

              {/* Floating Badge Card on Desktop */}
              <View className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl flex-row items-center space-x-3.5 border border-gray-100 z-20">
                <View className="w-10 h-10 rounded-full bg-[#EBF2DF] justify-center items-center">
                  <Leaf size={20} color="#4D642B" />
                </View>
                <View>
                  <Text className="text-xs font-bold text-[#14291B]">
                    Nutritious Meals
                  </Text>
                  <Text className="text-[11px] text-[#5A685B] mt-0.5">
                    A Healthier Tomorrow
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            /* Mobile & Tablet Dedicated Visual Container */
            <View className="w-full mt-6 relative items-center">
              {/* Script text attached above mobile food image */}
              <View className="mb-3 items-center">
                <Text className="font-serif italic text-base sm:text-lg font-bold text-[#4D642B]">
                  Good Food Brighter You ⤵
                </Text>
              </View>

              {/* Clean rounded food visual card focusing right-aligned food bowl */}
              <View className="w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-2 border-white relative">
                <Image
                  source={require("../assets/hero_banner_right_food.png")}
                  className="w-full h-full"
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "right center",
                  }}
                />

                {/* Mobile Floating Badge overlay at bottom right of image */}
                <View className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md flex-row items-center space-x-2 border border-gray-100 z-10">
                  <View className="w-8 h-8 rounded-full bg-[#EBF2DF] justify-center items-center">
                    <Leaf size={16} color="#4D642B" />
                  </View>
                  <View>
                    <Text className="text-xs font-bold text-[#14291B]">
                      Nutritious Meals
                    </Text>
                    <Text className="text-[10px] text-[#5A685B]">
                      A Healthier Tomorrow
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

        </View>
      </View>
    </View>
  );
}
