import React from "react";
import semisun from "../../assets/img/demi-soleil-creme.png";
import sun from "../../assets/img/soleilO.png";
import { PopupButton } from "react-calendly";

const Service = () => {
  return (
    <div id="services" className="mb-20">
      <div className="flex items-center justify-center md:justify-start mt-10 max-[500px]:mt-22 gap-3 max-md:pl-0 md:pl-12">
        <img src={sun} alt="soleil" className="w-14 md:w-16" />
        <h1 className="font-newzen font-bold text-[#ED9B40] text-4xl">
          Services
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14 my-16 mx-auto max-w-6xl">
        <div className="flex flex-col items-center md:items-start p-6">
          <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:max-w-[180px] max-md:mx-auto">
            <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />

            <h2 className="text-[#AA8F66] font-newzen font-bold text-xl mt-3 w-full max-md:text-left">
              Identité de marque
            </h2>

            <p className="text-[#ED9B40] font-newzen font-medium text-lg mt-3 text-left w-full md:w-40">
              Logos, identité visuelle, rebranding
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start p-6">
          <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:max-w-[180px] max-md:mx-auto">
            <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />

            <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3 w-[230px] max-md:text-left">
              Support de communication
            </h2>

            <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-left text-lg w-full md:max-w-lg">
              Flyer, PLV, affiche, packaging, carte de visite, brochure,
              dépliant, publications réseaux sociaux
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start p-6">
          <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center max-md:max-w-[180px] max-md:mx-auto">
            <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />

            <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3 w-full max-md:text-left">
              Webdesign
            </h2>

            <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-left text-lg w-full">
              Site vitrine, site e-commerce, landing page, maquettes UI,
              bannières web
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <PopupButton
          url="https://calendly.com/lutetebenedicte/30min"
          rootElement={document.getElementById("root")}
          text="Réserver votre appel gratuit"
          className="bg-[#ED9B40] text-white px-4 py-2 rounded-2xl text-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
        />
      </div>
    </div>
  );
};

export default Service;
