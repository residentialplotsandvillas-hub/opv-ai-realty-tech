
"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  const phone = "919963513939";

  const whatsappMessage = encodeURIComponent(
    "Hello OPV Team, I am interested in your services. Please share more details."
  );

  return (
    <div className="fixed bottom-6 right-4 z-[9999] flex flex-col gap-4 sm:bottom-8 sm:right-7">

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phone}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1DA851] sm:h-16 sm:w-16"
      >
        <FaWhatsapp size={34} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:+${phone}`}
        aria-label="Call OPV"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E7B30F] text-[#033505] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F4D545] sm:h-16 sm:w-16"
      >
        <Phone size={27} fill="currentColor" />
      </a>

    </div>
  );
}
