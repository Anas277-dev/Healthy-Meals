import React from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import {
  ArrowRight,
  Gem,
  Heart,
  Truck,
  Leaf,
} from "lucide-react-native";

const ADVANTAGES_DATA = [
  {
    id: "1",
    title: "Premium Quality",
    subtitle: "High-quality, fresh ingredients",
    icon: Gem,
  },
  {
    id: "2",
    title: "Health Focused",
    subtitle: "Nutritionist designed meals",
    icon: Heart,
  },
  {
    id: "3",
    title: "Convenient Delivery",
    subtitle: "To your home or office",
    icon: Truck,
  },
  {
    id: "4",
    title: "Flexible Plans",
    subtitle: "Options for every dietary need",
    icon: Leaf,
  },
];

export default function Advantages({ onDiscoverAdvantages }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  return (
    <View className="w-full bg-[#EEF2E6] pt-5 sm:pt-6 pb-6 sm:pb-8 border-b border-[#E1E7D5]">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN LAYOUT: Flex row on desktop, stack on mobile/tablet */}
        <View className="flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: Section Title, Subtitle & CTA Button */}
          <View className="w-full lg:w-[35%] space-y-3.5 text-left">
            {/* Small Category Tag */}
            <Text className="text-xs sm:text-sm font-bold text-[#5A685B] tracking-[0.2em] uppercase">
              OUR ADVANTAGES
            </Text>

            {/* Main Heading */}
            <Text className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-extrabold text-[#14291B] tracking-tight leading-[1.15]">
              Why Choose Healthify
            </Text>

            {/* Paragraph Text Description */}
            <Text className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-[440px]">
              More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
            </Text>

            {/* CTA Button ("Discover All Advantages ->") */}
            <View className="pt-1">
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onDiscoverAdvantages}
                className="flex-row items-center bg-[#4D642B] hover:bg-[#3B4D21] px-6 py-3 rounded-2xl space-x-2.5 self-start shadow-sm transition-all"
              >
                <Text className="text-white font-bold text-xs sm:text-sm tracking-wide">
                  Discover All Advantages
                </Text>
                <ArrowRight size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* RIGHT COLUMN: 4 Feature Cards Grid */}
          <View className="w-full lg:w-[63%] grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mt-4 lg:mt-0">
            {ADVANTAGES_DATA.map((item) => {
              const IconComponent = item.icon;

              return (
                <View
                  key={item.id}
                  className="bg-white rounded-[22px] p-5 sm:p-6 text-center items-center justify-center space-y-3 shadow-sm border border-[#E2E8D8] hover:shadow-md hover:border-[#4D642B]/30 transition-all group"
                >
                  {/* Outline Icon */}
                  <View className="w-12 h-12 rounded-full bg-[#F5F8F0] group-hover:bg-[#EBF2DF] justify-center items-center transition-colors">
                    <IconComponent size={24} color="#4D642B" strokeWidth={1.75} />
                  </View>

                  {/* Card Title */}
                  <Text className="text-sm sm:text-base font-bold text-[#14291B] text-center leading-tight">
                    {item.title}
                  </Text>

                  {/* Card Subtitle */}
                  <Text className="text-xs text-[#5A685B] text-center leading-snug max-w-[140px]">
                    {item.subtitle}
                  </Text>
                </View>
              );
            })}
          </View>

        </View>

      </View>
    </View>
  );
}
