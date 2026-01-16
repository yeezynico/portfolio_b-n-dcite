import React from 'react'
import semisun from '../../assets/img/demi-soleil-creme.png'
import sun from '../../assets/img/soleilO.png'
import { PopupButton } from 'react-calendly'

const Service = () => {
  return (
    <div id="services" className="mb-20 px-6 md:px-12">
      <div className="flex items-center justify-center md:justify-start mt-10 gap-3">
        <img src={sun} alt="soleil" className="w-14 md:w-16" />
        <h1 className="font-newzen font-bold text-[#ED9B40] text-3xl md:text-6xl">
          Services
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-16 mx-auto max-w-6xl">
        <div className="flex flex-col  md:items-start p-6">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Identité de marque
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium text-lg mt-3 text-left w-40">
            Logos, identité visuelle, rebranding
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start p-6">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Support de communication
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-left text-lg max-w-lg text-balance">
            Flyer, PLV, affiche, packaging, carte de visite, brochure, dépliant, publications réseaux sociaux
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start p-6">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Webdesign
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-left text-lg ">
            Site vitrine, site e-commerce, landing page, maquettes UI, bannières web
          </p>
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
  )
}

export default Service
