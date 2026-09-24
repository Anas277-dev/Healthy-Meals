import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react-native";

// Custom X (Twitter) icon component matching screenshot 2
const XIcon = ({ size = 13, color = "#FFFFFF" }) => (
  <Text style={{ color, fontSize: size, fontWeight: "900", fontFamily: "sans-serif" }}>
    X
  </Text>
);

export default function Footer({ onNavigate }) {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Healthify! I would like to inquire about your healthy meal plans."
    );
    Linking.openURL(`https://wa.me/971502626144?text=${message}`);
  };

  return (
    <View className="w-full bg-[#0A1A10] text-white pt-6 sm:pt-8 lg:pt-9 pb-5 relative">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN 4-COLUMN FOOTER GRID */}
        <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10 pb-6 sm:pb-8">
          
          {/* COLUMN 1: Brand & Social Icons */}
          <View className="space-y-3 sm:space-y-3.5">
            {/* Logo - Vertically Stacked matching reference screenshot 2 */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => onNavigate && onNavigate("Home")}
              className="items-start justify-center"
            >
              <Text className="text-base sm:text-lg font-serif text-white font-bold tracking-wider leading-tight mb-0.5">
                هيلثيفي
              </Text>
              <Text className="text-lg sm:text-xl font-serif font-black text-white tracking-[0.18em] leading-none uppercase">
                HEALTHIFY
              </Text>
            </TouchableOpacity>

            {/* Tagline */}
            <Text className="text-xs text-[#A2B6A4] leading-relaxed max-w-[280px]">
              At Healthify, We Believe Healthy Eating Should Be Convenient, Affordable, And Enjoyable.
            </Text>

            {/* 4 Circle Social Icons (f, X, Instagram, Youtube) */}
            <View className="flex-row items-center space-x-2.5 pt-1">
              <TouchableOpacity className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#23422E] items-center justify-center hover:border-white transition-colors cursor-pointer bg-[#0D2215]/50">
                <Facebook size={15} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#23422E] items-center justify-center hover:border-white transition-colors cursor-pointer bg-[#0D2215]/50">
                <XIcon size={13} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#23422E] items-center justify-center hover:border-white transition-colors cursor-pointer bg-[#0D2215]/50">
                <Instagram size={15} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#23422E] items-center justify-center hover:border-white transition-colors cursor-pointer bg-[#0D2215]/50">
                <Youtube size={15} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* COLUMN 2: Quick Links */}
          <View className="space-y-2.5">
            <Text className="text-sm font-bold text-white tracking-wide mb-1">
              Quick Links
            </Text>
            <View className="space-y-1.5 sm:space-y-2">
              {[
                "Home",
                "About Us",
                "Our Services",
                "Advantages",
                "Growth Plans",
                "Blogs",
                "Contact Us",
              ].map((item) => (
                <TouchableOpacity
                  key={item}
                  activeOpacity={0.7}
                  onPress={() => onNavigate && onNavigate(item)}
                >
                  <Text className="text-xs sm:text-[13px] text-[#A2B6A4] hover:text-white transition-colors cursor-pointer">
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* COLUMN 3: Our Services */}
          <View className="space-y-2.5">
            <Text className="text-sm font-bold text-white tracking-wide mb-1">
              Our Services
            </Text>
            <View className="space-y-1.5 sm:space-y-2">
              {[
                "Healthy ready-to-eat meals",
                "Customized meal plans",
                "Weight management meal",
                "High-protein meal plans",
                "Corporate meal solutions",
                "Fitness and wellness nutrition",
                "Healthy snacks and beverages",
                "Delivery and pickup services",
              ].map((service) => (
                <TouchableOpacity
                  key={service}
                  activeOpacity={0.7}
                  onPress={() => onNavigate && onNavigate("Services")}
                >
                  <Text className="text-xs sm:text-[13px] text-[#A2B6A4] hover:text-white transition-colors cursor-pointer">
                    {service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* COLUMN 4: Get In Touch */}
          <View className="space-y-2.5">
            <Text className="text-sm font-bold text-white tracking-wide mb-1">
              Get In Touch
            </Text>
            <View className="space-y-2.5 sm:space-y-3">
              <View className="flex-row items-center space-x-2.5">
                <MapPin size={15} color="#A2B6A4" />
                <Text className="text-xs sm:text-[13px] text-[#A2B6A4]">
                  Dubai, UAE
                </Text>
              </View>
              <View className="flex-row items-center space-x-2.5">
                <Phone size={15} color="#A2B6A4" />
                <Text className="text-xs sm:text-[13px] text-[#A2B6A4]">
                  +971 50 262 6144
                </Text>
              </View>
              <View className="flex-row items-center space-x-2.5">
                <Mail size={15} color="#A2B6A4" />
                <Text className="text-xs sm:text-[13px] text-[#A2B6A4]">
                  info@healthify.ae
                </Text>
              </View>
            </View>
          </View>

        </View>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <View className="pt-4 border-t border-[#1C3627] flex-col sm:flex-row justify-between items-center gap-2">
          <Text className="text-[11px] sm:text-xs text-[#7B9280]">
            Copyright © 2026 Healthify. All Rights Reserved.
          </Text>
          <View className="flex-row space-x-6">
            <TouchableOpacity onPress={() => onNavigate && onNavigate("Privacy")}>
              <Text className="text-[11px] sm:text-xs text-[#7B9280] hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onNavigate && onNavigate("Terms")}>
              <Text className="text-[11px] sm:text-xs text-[#7B9280] hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}



