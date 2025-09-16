import React from 'react'
import semisun from '../../assets/img/demi-soleil-creme.png'
import sun from '../../assets/img/soleilO.png'
import { PopupButton } from 'react-calendly'

const Service = () => {
  return (
    <div className="mb-20 px-6 md:px-12">
      <div className="flex items-center justify-center md:justify-start mt-10 gap-3">
        <img src={sun} alt="soleil" className="w-10 md:w-14" />
        <h1 className="font-newzen font-bold text-[#ED9B40] text-3xl md:text-5xl">
          Services
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-16">
        <div className="flex flex-col items-center md:items-start p-6 md:p-10">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Identité de marque
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-center md:text-left">
            Logos, identités graphiques, chartes graphiques
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start p-6 md:p-10">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Support de communication
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-center md:text-left">
            Flyer, PLV, affiche, packaging, carte de visite, brochure, dépliant
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start p-6 md:p-10">
          <img src={semisun} alt="soleil" className="w-32 md:w-52 mb-4" />
          <h2 className="text-[#AA8F66] font-newzen font-bold text-lg mt-3">
            Webdesign
          </h2>
          <p className="text-[#ED9B40] font-newzen font-medium mt-3 text-center md:text-left">
            Bannières animées, visuels pour réseaux sociaux, newsletters, emailings
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <PopupButton
            url="https://calendly.com/lutetebenedicte/30min"
            rootElement={document.getElementById("root")}
            text="Réserver votre appel gratuit"
            className="bg-[#ED9B40] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
        />
      </div>
    </div>
  )
}

export default Service
