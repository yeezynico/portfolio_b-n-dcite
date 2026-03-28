import { PopupButton } from "react-calendly";
import logo from "../../assets/img/Logo.svg";

export const Footer = () => {
  return (
    <footer className="p-6 md:p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start text-center md:text-left">
        <div className="flex flex-col gap-4 md:mr-10">
          <img src={logo} alt="Logo" className="w-40 md:w-44 mx-auto md:mx-0" />
          <div className="flex flex-col gap-2 md:gap-6 max-w-[400px] md:max-w-[420px] max-md:mx-auto">
            <p className="text-[#ED9B40] font-newzen font-medium text-md md:text-md leading-relaxed max-md:text-left">
              Bonjour, je suis Bénédicte et je suis graphiste designer.
            </p>
            <p className="text-[#ED9B40] font-newzen font-medium text-md md:text-md leading-relaxed max-md:text-left">
              Je crée des visuels qui vous ressemblent, tout en restant
              percutants et captivants.
            </p>
            <p className="text-[#ED9B40] font-newzen font-medium text-md md:text-md leading-relaxed max-md:text-left">
              Je vous accompagne sur différents projets : l'identité de marque,
              les supports de communication ainsi que le webdesign.
            </p>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <ul className="flex flex-col md:mt-8 max-md:flex-row max-md:justify-evenly gap-6 md:gap-10 text-[#ED9B40] font-newzen font-bold items-center text-xl md:text-xl">
            <li>Services</li>
            <li>Process</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-start order-1 md:order-2 md:mt-8">
          <PopupButton
            url="https://calendly.com/lutetebenedicte/30min"
            rootElement={document.getElementById("root")}
            text="Prenez votre rendez-vous"
            className="bg-[#ED9B40] text-white px-3.5 py-1 rounded-xl text-xl font-bold hover:bg-[#d9862e] transition font-newzen"
          />
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-[#ED9B40]/30 text-center">
        <p className="text-[#AA8F66] font-newzen text-sm md:text-base">
          © 2026 Béné. – Tous droits réservés
        </p>
      </div>
    </footer>
  );
};
