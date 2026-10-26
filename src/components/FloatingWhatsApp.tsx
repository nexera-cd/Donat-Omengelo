'use client';

import React, { useState } from 'react';
import { siteConfig } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip speech bubble */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-white dark:bg-[#18181F] text-[#09090B] dark:text-white border border-[#E4E4E7] dark:border-[#27272A] shadow-xl text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-bold text-[#DC2626] dark:text-[#EF4444]">
              Discuter avec Mr Dosh
            </p>
            <p className="text-[#71717A] dark:text-[#A1A1AA] text-[11px] mt-0.5 line-clamp-2">
              Un projet digital, visibilité ou IA ? Échangeons sur WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setTooltipVisible(false)}
            className="p-1 text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-white transition-colors"
            aria-label="Fermer l'infobulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Donat Omengelo sur WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
