export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33631072496"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        text-white
        px-5
        py-3
        rounded-full
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      💬 WhatsApp
    </a>
  );
}