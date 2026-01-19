import React from 'react'
import sun from '../../assets/img/soleil.png'
// import demisun from '../../assets/img/demi-soleil-creme.png'
// import sungroup from '../../assets/img/soleil group.png'
import { PopupButton } from 'react-calendly'

const Process = () => {
  return (
    <div id="process" className="bg-[#ED9B40] pt-10 w-full bg-cover bg-center relative overflow-hidden">
      <div className="mt-5 text-white max-w-7xl justify-center mx-auto">
        
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
          <img src={sun} alt="soleil" className="w-10 md:w-16" />
          <h1 className="font-newzen font-bold text-white text-3xl md:text-6xl">Process</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-14 gap-10">
          {[
            {
              step: "1",
              title: "Prise de rendez-vous",
              text: "Nous faisons connaissance et vous me présentez votre activité, votre univers ainsi que vos besoins. De mon côté, je m’assure d’être la bonne personne pour vous accompagner."
            },
            {
              step: "2",
              title: "Questionnaire rapide",
              text: "Je vous transmettrai quelques questions pour saisir pleinement votre vision."
            },
            {
              step: "3",
              title: "Ajustement si besoin",
              text: "Vous me communiquez vos retours et nous procédons aux ajustements ensemble."
            },
            {
              step: "4",
              title: "Remise des fichiers",
              text: "Je vous remets votre (et ses déclinaisons) dans tous les formats nécessaires (SVG, PNG, PDF vectoriel), accompagné de la palette de couleurs et des typographies."
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-start space-y-3 w-full">
              <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                <img src={sun} alt="soleil" className="w-full h-full" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#AA8F66] text-2xl md:text-4xl font-bold font-newzen">
                  {item.step}
                </span>
              </div>
              <h2 className="font-bold text-white text-lg md:text-xl leading-tight">{item.title}</h2>
              <p className="font-newzen font-medium text-white/95 text-sm leading-6 mb-5 w-30">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          {/* <PopupButton
              url="https://calendly.com/lutetebenedicte/30min"
              rootElement={document.getElementById("root")}
              text="Réserver votre appel gratuit"
              className="bg-[#FFFFFF] text-[#ED9B40] px-3.5 py-1 rounded-2xl font-bold hover:bg-[#F6ECDF] transition font-newzen"
          /> */}
          <button  className="bg-[#FFFFFF] text-[#ED9B40] hover:bg-[#F6ECDF] transition font-newzen px-4 py-2 rounded-2xl text-2xl font-bold mb-30">Prendre votre rendez-vous gratuitement</button>
        </div>

        </div>

    </div>
  )
}

export default Process
