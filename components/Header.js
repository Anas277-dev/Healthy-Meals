import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Menu, X, ArrowRight } from "lucide-react-native";

const NAV_ITEMS = [
  "Home",
  "About Us",
  "Our Services",
  "Advantages",
  "Growth Plans",
  "Blogs",
  "Contact Us",
];

export default function Header({ activeSection = "Home", onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  const handleNavPress = (item) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item);
    }
  };

  return (
    <SafeAreaView className="sticky top-0 z-50 w-full bg-[#F7F8F4]/95 backdrop-blur-md border-b border-[#E5E9DF]/80">
      {/* Outer grid container max-w-[1440px] px-4 sm:px-6 lg:px-8 */}
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex-row items-center justify-between">
        
        {/* Left Section: Logo + Nav Links */}
        <View className="flex-row items-center">
          {/* Brand Logo */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavPress("Home")}
            className="items-start justify-center p-0"
          >
            <Text className="text-[14px] font-serif text-[#4D642B] font-bold tracking-widest leading-none mb-0.5">
              هيلثيفي
            </Text>
            <Text className="text-[17px] font-black text-[#1F3A28] tracking-[0.18em] leading-none uppercase">
              HEALTHIFY
            </Text>
          </TouchableOpacity>

          {/* Desktop Navigation Links (Shifted slightly more to the right) */}
          {!isMobile && (
            <View className="flex-row items-center space-x-5 lg:space-x-8 ml-16 lg:ml-28">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item;
                const isHovered = hoveredNav === item;
                return (
                  <Pressable
                    key={item}
                    onPress={() => handleNavPress(item)}
                    onHoverIn={() => setHoveredNav(item)}
                    onHoverOut={() => setHoveredNav(null)}
                    className="py-1"
                  >
                    <Text
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#8BA838] font-bold"
                          : isHovered
                          ? "text-[#1F3A28] font-semibold"
                          : "text-[#5A685B] font-medium"
                      }`}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>

        {/* Right Section: Get Started CTA Button */}
        {!isMobile && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleNavPress("Growth Plans")}
            className="flex-row items-center bg-[#5B7337] hover:bg-[#4D642B] px-5 py-2.5 rounded-full space-x-2 shadow-sm transition-all ml-auto"
          >
            <Text className="text-white font-semibold text-[13px] tracking-wide">
              Get Started
            </Text>
            <ArrowRight size={14} color="#FFFFFF" />
          </TouchableOpacity>
        )}

        {/* Mobile Hamburger Toggle */}
        {isMobile && (
          <TouchableOpacity
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#EBF2DF] ml-auto"
            accessibilityLabel="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} color="#1F3A28" />
            ) : (
              <Menu size={24} color="#1F3A28" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* Mobile Menu Dropdown with Smooth Slide & Fade Animation */}
      {isMobile && (
        <View
          className={`w-full bg-white border-b border-[#E5E9DF] px-6 transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
            mobileMenuOpen
              ? "max-h-[480px] opacity-100 py-4"
              : "max-h-0 opacity-0 py-0 border-b-0 pointer-events-none"
          }`}
          style={{
            transitionProperty: "max-height, opacity, padding",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => handleNavPress(item)}
                className={`py-3 px-4 rounded-xl flex-row items-center justify-between transition-colors ${
                  isActive ? "bg-[#F0F4E6]" : "active:bg-gray-50"
                }`}
              >
                <Text
                  className={`text-base ${
                    isActive ? "text-[#8BA838] font-bold" : "text-[#1F3A28] font-medium"
                  }`}
                >
                  {item}
                </Text>
                {isActive && (
                  <View className="w-2 h-2 rounded-full bg-[#8BA838]" />
                )}
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleNavPress("Growth Plans")}
            className="flex-row items-center justify-center bg-[#5B7337] py-3.5 rounded-full space-x-2 mt-3 shadow-sm"
          >
            <Text className="text-white font-semibold text-base">
              Get Started
            </Text>
            <ArrowRight size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      )}

    </SafeAreaView>
  );
}
