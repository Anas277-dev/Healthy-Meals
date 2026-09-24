import React from "react";
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { Star, ArrowRight } from "lucide-react-native";

const REVIEWS_DATA = [
  {
    id: "1",
    name: "Sara M.",
    location: "Dubai, UAE",
    rating: 5,
    quote:
      "\"Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!\"",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Ahmed R.",
    location: "Dubai, UAE",
    rating: 5,
    quote:
      "\"Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.\"",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Fatima K.",
    location: "Dubai, UAE",
    rating: 5,
    quote:
      "\"Great quality, variety, and customer service. I feel healthier and more energized every day.\"",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials({ onViewMore }) {
  const { width } = useWindowDimensions();
  const isMd = width >= 768 && width < 1024;

  return (
    <View className="w-full bg-white py-6 sm:py-8 lg:py-10 border-b border-[#E3E7DC]">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER ROW */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3">
          <View className="space-y-1">
            {/* Category Tag */}
            <Text className="text-xs sm:text-sm font-bold text-[#4D642B] tracking-[0.2em] uppercase">
              CUSTOMER STORIES
            </Text>
            {/* Main Title */}
            <Text className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#14291B] tracking-tight">
              What Our Customers Say
            </Text>
          </View>

          {/* Top Right Action Link */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onViewMore}
            className="flex-row items-center space-x-1.5 self-start md:self-auto group cursor-pointer pb-1"
          >
            <Text className="text-xs sm:text-sm font-semibold text-[#4D642B] group-hover:text-[#2E3D19] transition-colors">
              View More Reviews
            </Text>
            <ArrowRight size={16} color="#4D642B" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* 3 REVIEWS CARDS GRID - PURE WHITE CARDS */}
        <View className="flex-col lg:flex-row gap-4 lg:gap-6 justify-between items-stretch">
          {REVIEWS_DATA.map((item) => (
            <View
              key={item.id}
              className="flex-1 bg-white rounded-2xl p-5 sm:p-6 lg:p-7 flex-col justify-between border border-[#E3E7DC] shadow-xs hover:shadow-md transition-all duration-300 w-full"
            >
              {/* Quote Body */}
              <Text className="text-sm sm:text-base lg:text-lg text-[#2E3C30] leading-relaxed mb-5 font-medium">
                {item.quote}
              </Text>

              {/* Bottom Author & Rating Row */}
              <View className="flex-row items-center justify-between pt-3 border-t border-[#F2F4EC]">
                {/* Author Info */}
                <View className="flex-row items-center space-x-2 sm:space-x-3">
                  <Image
                    source={{ uri: item.avatar }}
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-[#E3E7DC]"
                    alt={item.name}
                  />
                  <View>
                    <Text className="text-xs sm:text-sm lg:text-base font-bold text-[#14291B]">
                      {item.name}
                    </Text>
                    <Text className="text-[11px] sm:text-xs text-[#7A887C]">
                      {item.location}
                    </Text>
                  </View>
                </View>

                {/* 5 Stars Rating */}
                <View className="flex-row items-center space-x-0.5 sm:space-x-1 shrink-0">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={isMd ? 12 : 14}
                      color="#F59E0B"
                      fill="#F59E0B"
                    />
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

      </View>
    </View>
  );
}



