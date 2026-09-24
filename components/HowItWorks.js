import React from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { User, Soup, Truck, ArrowRight } from "lucide-react-native";

const STEPS = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Select the meal plan that fits your goals.",
    icon: User,
  },
  {
    number: "2",
    title: "We Prepare Fresh Meals",
    description: "Our chefs prepare nutritious meals with care.",
    icon: Soup,
  },
  {
    number: "3",
    title: "Enjoy Convenient Delivery",
    description: "Receive your meals and enjoy a healthier you.",
    icon: Truck,
  },
];

export default function HowItWorks({ onGetStarted }) {
  const { width } = useWindowDimensions();
  const isMd = width >= 768 && width < 1024;
  const isLg = width >= 1024;

  const iconSize = isLg ? 28 : isMd ? 22 : 26;
  const arrowSize = isLg ? 24 : isMd ? 18 : 22;

  return (
    <View className="w-full bg-[#F5F6F0] py-6 sm:py-8 lg:py-10 border-b border-[#E3E7DC]">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER ROW */}
        <View className="flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 lg:mb-8 gap-3">
          <View className="space-y-1">
            {/* Category Tag */}
            <Text className="text-xs font-bold text-[#4D642B] tracking-[0.2em] uppercase">
              OUR PROCESS
            </Text>
            {/* Main Title */}
            <Text className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#14291B] tracking-tight">
              Healthy Eating in 3 Simple Steps
            </Text>
          </View>

          {/* Top Right Action Link */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onGetStarted}
            className="flex-row items-center space-x-1.5 self-start md:self-auto group cursor-pointer pb-1"
          >
            <Text className="text-xs sm:text-sm font-semibold text-[#4D642B] group-hover:text-[#2E3D19] transition-colors">
              It's Easy to Get Started
            </Text>
            <ArrowRight size={16} color="#4D642B" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        {/* 3 STEPS HORIZONTAL ROW */}
        <View className="flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
          {STEPS.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === STEPS.length - 1;

            return (
              <React.Fragment key={step.number}>
                {/* Step Item - CLEAN FLUID INLINE LAYOUT */}
                <View className="flex-row items-center space-x-2.5 sm:space-x-3.5 bg-transparent p-0 shrink-0 w-full md:w-auto">
                  
                  {/* Number Circle */}
                  <View className="w-10 h-10 lg:w-12 lg:h-12 xl:w-13 xl:h-13 rounded-full bg-[#E2EBD8] items-center justify-center shrink-0 border border-[#D5E2C7]">
                    <Text className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-extrabold text-[#14291B]">
                      {step.number}
                    </Text>
                  </View>

                  {/* Icon */}
                  <View className="w-8 h-8 lg:w-10 lg:h-10 items-center justify-center shrink-0">
                    <IconComponent size={iconSize} color="#3B4E28" strokeWidth={1.5} />
                  </View>

                  {/* Content (Title & Description) */}
                  <View className="space-y-0.5 max-w-[160px] sm:max-w-[180px] lg:max-w-[220px] xl:max-w-[270px] shrink">
                    <Text className="text-sm sm:text-base lg:text-lg xl:text-xl font-serif font-bold text-[#14291B] leading-tight">
                      {step.title}
                    </Text>
                    <Text className="text-xs sm:text-sm text-[#5B6B5D] leading-relaxed">
                      {step.description}
                    </Text>
                  </View>
                </View>

                {/* Arrow Connector Container */}
                {!isLast && (
                  <View className="hidden md:flex flex-1 items-center justify-center min-w-[20px] lg:min-w-[36px] px-1 lg:px-3 shrink my-auto">
                    <ArrowRight size={arrowSize} color="#4D642B" strokeWidth={2} />
                  </View>
                )}
              </React.Fragment>
            );
          })}
        </View>

      </View>
    </View>
  );
}





