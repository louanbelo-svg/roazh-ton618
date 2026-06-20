export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33631072496"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >

      <div
        className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          bg-white
          px-4
          py-3
          rounded-full
          shadow-xl
          text-sm
          font-medium
          whitespace-nowrap
          flex
          items-center
          gap-2
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="#25D366"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.002 0C3.59 0 0 3.59 0 8.002a7.95 7.95 0 0 0 1.063 3.978L0 16l4.118-1.081a7.97 7.97 0 0 0 3.884 1.006h.001c4.411 0 8-3.59 8-8.002a7.95 7.95 0 0 0-2.402-5.597z"/>
        </svg>

        Réponse rapide sur WhatsApp

      </div>

      <div
        className="
          bg-green-500
          hover:bg-green-600
          text-white
          w-16
          h-16
          rounded-full
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
          animate-bounce
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.002 0C3.59 0 0 3.59 0 8.002a7.95 7.95 0 0 0 1.063 3.978L0 16l4.118-1.081a7.97 7.97 0 0 0 3.884 1.006h.001c4.411 0 8-3.59 8-8.002a7.95 7.95 0 0 0-2.402-5.597z"/>
        </svg>

      </div>

    </a>
  );
}