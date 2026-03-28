import { useState } from "react";
import logo from "../../assets/img/Logo.svg";
import star from "../../assets/img/etoile.png";
import { Menu, X } from "lucide-react";
import { PopupButton } from "react-calendly";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff] px-6 md:px-10 py-6">
        <nav className="flex w-full items-center justify-between">
          <img src={logo} alt="Bene." className="w-24 md:w-38" />

          <ul className="hidden md:flex gap-18 text-[#ED9B40] font-newzen font-bold text-2xl">
            <li>
              <a href="#services" className="ml-8">
                Services
              </a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
          </ul>

          <div className="hidden md:relative md:inline-block">
            <PopupButton
              url="https://calendly.com/lutetebenedicte/30min"
              rootElement={document.getElementById("root")}
              text="Réserver votre appel gratuit"
              className="relative z-10 bg-[#ED9B40] text-white text-[22px] px-3.5 py-1 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
            />

            <img
              src={star}
              alt="etoile"
              className="w-8 h-9 absolute -left-4 -top-3 pointer-events-none z-20"
            />
            <img
              src={star}
              alt="etoile"
              className="w-5 h-6 absolute -right-2 -bottom-3 pointer-events-none z-20"
            />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#ED9B40]"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X size={40} strokeWidth={2.5} /> : <Menu size={40} strokeWidth={2.5} />}
          </button>
        </nav>

        {open && (
          <div className="absolute top-full left-0 right-0 z-40 bg-[#ffffff] px-6 pt-10 pb-10 flex flex-col min-h-[65vh] rounded-b-[40px] shadow-lg md:hidden">
            <div className="flex flex-col text-[#ED9B40] font-newzen font-bold text-2xl gap-16">
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
              <a href="#process" onClick={() => setOpen(false)}>
                Process
              </a>
              <a href="#portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </a>
            </div>

            <div className="mt-auto flex justify-center">
              <PopupButton
                url="https://calendly.com/lutetebenedicte/30min"
                rootElement={document.getElementById("root")}
                text="Prenez votre rendez-vous"
                className="bg-[#ED9B40] text-white px-6 py-3 rounded-2xl text-xl font-bold hover:bg-[#d9862e] transition font-newzen"
              />
            </div>
          </div>
        )}
      </header>

      <div className="h-[110px] md:h-[120px]" />
    </>
  );
};