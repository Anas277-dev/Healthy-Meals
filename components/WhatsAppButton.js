import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { MessageCircle } from "lucide-react-native";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Healthify! I would like to inquire about your healthy meal plans."
    );
    Linking.openURL(`https://wa.me/971502626144?text=${message}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={openWhatsApp}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5A] w-12 h-12 sm:w-14 sm:h-14 rounded-full items-center justify-center shadow-2xl z-[9999] transition-transform hover:scale-110 cursor-pointer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        boxShadow: "0 8px 25px rgba(37, 211, 102, 0.55)",
      }}
    >
      <MessageCircle size={26} color="#FFFFFF" fill="#FFFFFF" />
    </TouchableOpacity>
  );
}
