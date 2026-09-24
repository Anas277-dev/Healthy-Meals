import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Plus, ArrowRight } from "lucide-react-native";

const FAQ_DATA = [
  {
    id: "1",
    question: "What are your meal plans?",
    answer:
      "We offer Essential, Balanced, and Performance plans tailored to weight management, athletic performance, and healthy daily nutrition.",
  },
  {
    id: "2",
    question: "How does delivery work?",
    answer:
      "Freshly cooked meals are packed in temperature-controlled cooler boxes and delivered daily to your home or office every morning.",
  },
  {
    id: "3",
    question: "Can I customize my meals?",
    answer:
      "Yes! You can specify your macro targets, food allergies, and ingredient preferences directly through your dashboard.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, Apple Pay, Tabby split payments, and direct bank transfers.",
  },
  {
    id: "5",
    question: "Do you have a mobile app?",
    answer:
      "Yes, our mobile app allows you to manage daily meal choices, pause deliveries, and track nutrition on the go.",
  },
];

export default function FAQ({ onViewAllFAQs }) {
  const [openId, setOpenId] = useState("1");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <View className="w-full bg-[#F5F6F0] py-5 sm:py-6 lg:py-8 border-b border-[#E3E7DC]">
      <View className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-COLUMN LAYOUT */}
        <View className="flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10">
          
          {/* LEFT COLUMN: TITLE, DESCRIPTION & WIDER CTA BUTTON */}
          <View className="w-full lg:w-[40%] space-y-2.5 lg:space-y-3">
            {/* Category Tag */}
            <Text className="text-xs sm:text-sm font-bold text-[#4D642B] tracking-[0.2em] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </Text>
            
            {/* Main Title */}
            <Text className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#14291B] tracking-tight leading-tight">
              Have Questions?{"\n"}We've Got Answers.
            </Text>

            {/* Description Paragraph */}
            <Text className="text-sm sm:text-base text-[#5B6B5D] leading-relaxed max-w-[420px]">
              Find quick answers to common questions about our meal plans, delivery, and more.
            </Text>

            {/* CTA Button - WIDER WIDTH */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onViewAllFAQs}
              className="bg-[#4D642B] hover:bg-[#394B20] px-7 sm:px-8 py-3 rounded-2xl flex-row items-center space-x-2.5 self-start mt-3 transition-all duration-200 shadow-xs cursor-pointer"
            >
              <Text className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                View All FAQs
              </Text>
              <ArrowRight size={16} color="#FFFFFF" strokeWidth={2} />
            </TouchableOpacity>
          </View>

          {/* RIGHT COLUMN: ACCORDION LIST (SLIMMER HEIGHT & SMOOTH TRANSITION) */}
          <View className="w-full lg:w-[56%] space-y-2 sm:space-y-2.5">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;

              return (
                <View
                  key={item.id}
                  className="bg-white rounded-xl border border-[#E3E7DC] overflow-hidden shadow-xs transition-all duration-300 ease-in-out"
                >
                  {/* Question Header (Slimmer height) */}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => toggleAccordion(item.id)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 flex-row items-center justify-between space-x-3 cursor-pointer select-none"
                  >
                    <Text className="text-xs sm:text-sm font-semibold text-[#14291B] flex-1">
                      {item.question}
                    </Text>
                    
                    {/* Plus Icon with Smooth 45-Degree Rotation Animation */}
                    <View
                      className={`w-6 h-6 rounded-full items-center justify-center shrink-0 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <Plus
                        size={17}
                        color={isOpen ? "#4D642B" : "#5A6D4B"}
                        strokeWidth={2.2}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* Collapsible Answer Body with Smooth Transition */}
                  {isOpen && (
                    <View className="px-4 pb-3 sm:px-5 sm:pb-3.5 pt-0 border-t border-[#F2F4EC] transition-all duration-300 ease-in-out">
                      <Text className="text-xs sm:text-sm text-[#5B6B5D] leading-relaxed pt-2">
                        {item.answer}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>

        </View>

      </View>
    </View>
  );
}



