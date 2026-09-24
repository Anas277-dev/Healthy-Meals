import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { ArrowRight } from "lucide-react-native";

const SERVICES_DATA = [
  {
    id: "1",
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    fallback: require("../assets/hero_salad_bowl.png"),
  },
  {
    id: "2",
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    fallback: require("../assets/hero_banner_right_food.png"),
  },
  {
    id: "3",
    title: "Weight Management Plans",
    description: "Delicious meals to support your weight loss or maintenance journey.",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    fallback: require("../assets/hero_full_banner.png"),
  },
  {
    id: "4",
    title: "High-Protein Meal Plans",
    description: "Nutrient-rich meals for active lifestyles and fitness goals.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    fallback: require("../assets/hero_salad_bowl.png"),
  },
];

export default function Services({ onSelectService, onViewAllServices }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  return (
    <View className="w-full bg-[#F6F7F2] pt-6 sm:pt-8 pb-6 sm:pb-8 border-y border-[#E5E9DF]/60">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER ROW */}
        <View className="flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <View className="space-y-1.5 max-w-[720px]">
            {/* Small Category Tag */}
            <Text className="text-xs sm:text-sm font-bold text-[#5A685B] tracking-[0.2em] uppercase">
              OUR SERVICES
            </Text>

            {/* Section Main Title */}
            <Text className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#14291B] tracking-tight leading-tight">
              Healthy Meal Plans for Every Lifestyle
            </Text>
          </View>

          {/* Top-Right "View All Services ->" Link */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onViewAllServices}
            className="flex-row items-center space-x-1.5 group self-start sm:self-auto pt-1"
          >
            <Text className="text-xs sm:text-sm font-bold text-[#4D642B] group-hover:text-[#14291B] transition-colors">
              View All Services
            </Text>
            <ArrowRight size={16} color="#4D642B" />
          </TouchableOpacity>
        </View>

        {/* 4 SERVICE CARDS GRID */}
        <View className="flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-5 sm:gap-6 justify-between items-stretch">
          {SERVICES_DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.92}
              onPress={() => onSelectService && onSelectService(item)}
              className="w-full sm:w-[48%] lg:w-[23.5%] bg-white rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl border border-[#E5E9DF] flex-col justify-between transition-all duration-300 group"
            >
              {/* Card Image Container (Sleek low height) */}
              <View 
                className="w-full bg-gray-100 overflow-hidden relative"
                style={{ aspectRatio: 2.1 }}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  defaultSource={item.fallback}
                />
              </View>

              {/* Card Body Content */}
              <View className="p-3.5 sm:p-4 flex-1 flex-col justify-between">
                <View className="space-y-1 mb-2">
                  {/* Card Title */}
                  <Text className="text-sm sm:text-base font-bold text-[#14291B] leading-snug group-hover:text-[#4D642B] transition-colors">
                    {item.title}
                  </Text>

                  {/* Card Description */}
                  <Text className="text-xs text-[#5A685B] leading-relaxed">
                    {item.description}
                  </Text>
                </View>

                {/* Bottom-Right Circular Arrow Button */}
                <View className="flex-row justify-end items-center pt-1">
                  <View className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-[#EBF2DF] group-hover:bg-[#4D642B] justify-center items-center transition-colors shadow-sm">
                    <ArrowRight
                      size={15}
                      color="#4D642B"
                      className="group-hover:stroke-white transition-colors"
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </View>
    </View>
  );
}
