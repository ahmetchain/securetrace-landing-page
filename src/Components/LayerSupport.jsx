import React from "react";
import Layer from "../assets/img/Layer.webp";
const LayeredSupportSection = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <img
        src={Layer}
        alt="Layered Data Visualization"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 text-center px-8">
        <h2 className="text-5xl font-bold mb-4">Her Katmanda Yanınızdayız</h2>
        <p className="text-xl max-w-2xl mx-auto">
          SecureTrace, verilerinizi güvenli bir şekilde takip ederek her adımda
          yanınızda olur. İster veri yönetimi, ister güvenlik, tüm
          süreçlerinizde size destek sağlıyoruz.
        </p>
      </div>
    </div>
  );
};

export default LayeredSupportSection;
