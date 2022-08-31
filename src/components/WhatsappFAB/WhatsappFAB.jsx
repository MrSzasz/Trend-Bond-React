import { BsWhatsapp } from "react-icons/bs";

const WhatsappFAB = () => {
  return (
    <a href="www.google.com" target="_blank" className="flex fixed right-[70px] bottom-[40px] w-max p-max bg-tbGreen rounded-full hover:scale-110 transition-all">
      <BsWhatsapp className="p-3" color="white" size={50} />
    </a>
  );
};

export default WhatsappFAB;