import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Utensils, Sparkles, Star, Users } from "lucide-react-native";

const STATS_DATA = [
  {
    id: "1",
    number: "1M+",
    label: "Meals Delivered",
    icon: Utensils,
  },
  {
    id: "2",
    number: "30K+",
    label: "Happy Customers",
    icon: Sparkles,
  },
  {
    id: "3",
    number: "4.8/5",
    label: "Customer Satisfaction",
    icon: Star,
  },
  {
    id: "4",
    number: "550+",
    label: "Corporate Clients",
    icon: Users,
  },
];

export default function StatsBar() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View className="w-full bg-[#F4F5EF] border-y border-[#E5E9DF] py-5 sm:py-6 lg:py-5">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid: Slim compact row on desktop, spacious 2x2 grid on mobile */}
        <View className="flex-row flex-wrap items-center justify-between">
          {STATS_DATA.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === STATS_DATA.length - 1;

            return (
              <View
                key={item.id}
                className={`
                  ${isMobile ? "w-1/2 py-3.5 px-3" : "flex-1 py-1 px-3"}
                  flex-row items-center justify-center space-x-3.5
                  ${!isMobile && !isLast ? "border-r border-[#DCE2D3]" : ""}
                `}
              >
                {/* Olive Green Outline Icon */}
                <View className="w-10 h-10 rounded-full bg-[#EBF2DF]/80 justify-center items-center">
                  <IconComponent size={20} color="#4D642B" />
                </View>

                {/* Number & Label */}
                <View className="items-start">
                  <Text className="text-2xl sm:text-2xl font-serif font-black text-[#14291B] tracking-tight leading-tight">
                    {item.number}
                  </Text>
                  <Text className="text-xs sm:text-xs font-semibold text-[#5A685B] mt-0.5">
                    {item.label}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

      </View>
    </View>
  );
}
