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
  Leaf,
  Star,
  TrendingUp,
  Check,
} from "lucide-react-native";

const PRICING_PLANS = [
  {
    id: "essential",
    name: "Essential Plan",
    subtitle: "Great for individuals starting their healthy journey.",
    price: "299",
    currency: "AED",
    period: "/ month",
    icon: Leaf,
    isPopular: false,
    features: [
      "Fresh daily meals",
      "Balanced nutrition",
      "Flexible delivery",
    ],
    buttonStyle: "outlined",
  },
  {
    id: "balanced",
    name: "Balanced Plan",
    subtitle: "Our best value plan for a healthier lifestyle.",
    price: "499",
    currency: "AED",
    period: "/ month",
    icon: Star,
    isPopular: true,
    badgeText: "MOST POPULAR ★",
    features: [
      "Customized meal options",
      "Wide variety of meals",
      "Nutritionist support",
      "Flexible delivery",
    ],
    buttonStyle: "filled",
  },
  {
    id: "performance",
    name: "Performance Plan",
    subtitle: "For fitness enthusiasts and active lifestyles.",
    price: "699",
    currency: "AED",
    period: "/ month",
    icon: TrendingUp,
    isPopular: false,
    features: [
      "High-protein meals",
      "Performance-focused nutrition",
      "Personalized plans",
      "Priority support",
    ],
    buttonStyle: "outlined",
  },
];

export default function Pricing({ onSelectPlan, onViewAllPlans }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 640;

  return (
    <View className="w-full bg-[#FFFFFF] pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-[#E5E9DF]/80">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER ROW */}
        <View className="flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <View className="space-y-1.5 max-w-[720px]">
            {/* Category Label */}
            <Text className="text-xs sm:text-sm font-bold text-[#5A685B] tracking-[0.2em] uppercase">
              GROWTH PLANS
            </Text>

            {/* Main Heading */}
            <Text className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#14291B] tracking-tight leading-tight">
              Find the Perfect Plan for You
            </Text>
          </View>

          {/* Top-Right "View All Plans ->" Link */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onViewAllPlans}
            className="flex-row items-center space-x-1.5 group self-start sm:self-auto pt-1"
          >
            <Text className="text-xs sm:text-sm font-bold text-[#4D642B] group-hover:text-[#14291B] transition-colors">
              View All Plans
            </Text>
            <ArrowRight size={16} color="#4D642B" />
          </TouchableOpacity>
        </View>

        {/* 4 CARDS GRID (3 Pricing Cards + 1 Visual Image Card) */}
        <View className="flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-4 sm:gap-5 lg:gap-6 justify-between items-stretch">
          
          {/* 3 PRICING CARDS */}
          {PRICING_PLANS.map((plan) => {
            const IconComponent = plan.icon;

            return (
              <View
                key={plan.id}
                className={`
                  w-full sm:w-[48%] lg:w-[23.5%] bg-white rounded-[20px] sm:rounded-[22px] overflow-hidden flex-col justify-between transition-all duration-300 relative self-center sm:self-auto
                  ${
                    plan.isPopular
                      ? "border-2 border-[#4D642B] shadow-lg"
                      : "border border-[#E5E9DF] shadow-sm hover:shadow-md"
                  }
                `}
              >
                {/* Most Popular Banner Header (For Balanced Plan) */}
                {plan.isPopular && (
                  <View className="w-full bg-[#4D642B] py-1.5 items-center justify-center">
                    <Text className="text-white text-[11px] font-bold uppercase tracking-widest text-center">
                      {plan.badgeText}
                    </Text>
                  </View>
                )}

                {/* Card Main Body */}
                <View className="p-4 sm:p-5 flex-1 flex-col justify-between">
                  
                  {/* Top Portion: Icon on Left of Heading, Subtitle & Centered Price */}
                  <View>
                    {/* Header Row: Icon on LEFT of Heading */}
                    <View className="flex-row items-center space-x-2.5 mb-1.5">
                      <View
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full justify-center items-center ${
                          plan.isPopular ? "bg-[#EBF2DF]" : "bg-[#F5F8F0]"
                        }`}
                      >
                        <IconComponent size={19} color="#4D642B" />
                      </View>
                      <Text className="text-base sm:text-lg font-bold text-[#14291B] tracking-tight">
                        {plan.name}
                      </Text>
                    </View>

                    {/* Subtitle */}
                    <Text className="text-xs text-[#5A685B] leading-relaxed mb-3">
                      {plan.subtitle}
                    </Text>

                    {/* Centered Price Display */}
                    <View className="flex-row items-baseline justify-center text-center py-2.5 mb-3 border-b border-[#E5E9DF]/60 space-x-1.5">
                      <Text className="text-xl sm:text-2xl font-bold text-[#14291B]">
                        {plan.currency} {plan.price}
                      </Text>
                      <Text className="text-xs text-[#5A685B] font-medium">
                        {plan.period}
                      </Text>
                    </View>

                    {/* Feature List (Checkmarked Items) */}
                    <View className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <View key={idx} className="flex-row items-center space-x-2">
                          <Check size={15} color="#4D642B" strokeWidth={2.5} />
                          <Text className="text-xs sm:text-sm text-[#2C3E2D] font-medium">
                            {feature}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>

                  {/* CTA Action Button */}
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => onSelectPlan && onSelectPlan(plan)}
                    className={`
                      w-full py-2.5 rounded-2xl items-center justify-center transition-all shadow-sm mt-2
                      ${
                        plan.buttonStyle === "filled"
                          ? "bg-[#14291B] hover:bg-[#0A1810]"
                          : "border border-[#4D642B] bg-transparent hover:bg-[#EBF2DF]"
                      }
                    `}
                  >
                    <Text
                      className={`font-bold text-xs sm:text-sm ${
                        plan.buttonStyle === "filled" ? "text-white" : "text-[#14291B]"
                      }`}
                    >
                      Get Started
                    </Text>
                  </TouchableOpacity>

                </View>
              </View>
            );
          })}

          {/* CARD 4: VISUAL IMAGE CARD ("Invest in a Healthier You") */}
          <View className="w-full sm:w-[48%] lg:w-[23.5%] rounded-[20px] sm:rounded-[22px] overflow-hidden relative shadow-md min-h-[300px] sm:min-h-[330px] justify-end border border-[#E5E9DF] self-center sm:self-auto">
            {/* Background Food Image */}
            <Image
              source={require("../assets/hero_salad_bowl.png")}
              className="absolute inset-0 w-full h-full"
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Dark Gradient Overlay for text contrast */}
            <View className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />

            {/* Overlay Text Content */}
            <View className="p-5 relative z-20 space-y-2">
              {/* Leaf Watermark Badge */}
              <View className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md justify-center items-center border border-white/30 mb-0.5">
                <Leaf size={16} color="#FFFFFF" />
              </View>

              {/* Card Headline */}
              <View>
                <Text className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                  Invest in
                </Text>
                <Text className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight underline decoration-[#95B368] decoration-2 underline-offset-4">
                  a Healthier You
                </Text>
              </View>
            </View>
          </View>

        </View>

      </View>
    </View>
  );
}
