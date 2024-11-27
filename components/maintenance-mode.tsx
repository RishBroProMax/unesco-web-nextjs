import { motion } from "framer-motion";
import { X } from 'lucide-react';
import { useState } from "react";

function MaintenanceMessage() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-pulse relative rounded-lg bg-white p-6 shadow-xl max-w-md w-full"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        aria-label="Close maintenance message"
      >
        <X size={24} />
      </button>
      <h2 className="mb-4 text-3xl font-bold text-gray-800 font-heading">Website Under Maintenance</h2>
      <p className="text-gray-600 mb-4">
        We're currently working on improving our website to provide you with a better experience. Please check back soon!
      </p>
      <p className="text-sm text-gray-500 italic">Maintenance by RishBroProMax</p>
    </motion.div>
  );
}

export default MaintenanceMessage;

