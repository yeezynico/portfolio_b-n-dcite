import React from 'react'
import sun from '../../assets/img/soleil.png'
import { ButtonVariant } from '../ui/Button'
import demisun from '../../assets/img/demi-soleil-creme.png'
import sungroup from '../../assets/img/soleil group.png'

const Process = () => {
  return (
    <div className="bg-[#ED9B40] pt-10 w-full bg-cover bg-center relative overflow-hidden">
      <div className="mt-5 text-white max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
          <img src={sun} alt="soleil" className="w-10 md:w-14" />
          <h1 className="font-newzen font-bold text-white text-3xl md:text-5xl">Process</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-start">
          {[
            {
              step: "1",
              title: "Prise de rendez-vous",
              text: "Nous faisons connaissance et vous me présentez votre activité, votre univers ainsi que vos besoins. De mon côté, je m'assure d'être la bonne personne pour vous accompagner."
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
              text: "Je vous remets votre projet (et ses déclinaisons) dans tous les formats nécessaires (SVG, PNG, PDF vectoriel), accompagné de la palette de couleurs et des typographies."
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
              <p className="font-newzen font-medium text-white/95 text-sm leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <ButtonVariant onClick={() => alert("Coucou Poulpi!")}>
            Prendre votre rendez-vous gratuitement
          </ButtonVariant>
        </div>

        <div className="flex justify-center mt-10">
          <img src={sungroup} alt="groupement de soleils" className="w-3/4 md:w-1/2" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src={demisun} alt="soleil décoration" className="w-full md:w-auto max-h-[70vh] object-contain" />
      </div>
    </div>
  )
}

export default Process
