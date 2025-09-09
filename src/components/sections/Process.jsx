import React from 'react'
import sun from '../../assets/img/soleil.png'
import { ButtonVariant } from '../ui/Button'
import demisun from '../../assets/img/demi-soleil-creme.png'
import sungroup from '../../assets/img/soleil group.png'

const Process = () => {
  return (
    <div className='bg-[#ED9B40] pt-5 w-full bg-cover bg-center relativeoverflow-hidden'>
      <div className='mt-5 text-white'>
          <div className='flex items-center ml-10'>
              <img src={sun} alt="soleil" className='w-14 mr-3 mb-1'/>
              <h1 className='font-newzen font-bold text-white text-5xl'>Process</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 my-10 place-items-start">
            <div className="w-[130px] h-full flex flex-col items-start space-y-3">
              <div className="relative inline-flex items-center justify-center w-20 h-20">
                <img src={sun} alt="soleil" className="w-full h-full" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[#AA8F66] text-4xl font-bold font-newzen">1</span>
              </div>
              <h2 className="font-bold text-white leading-tight text-balance">
                Prise de rendez-vous
              </h2>
              <p className="font-newzen font-medium text-white/95 text-sm leading-6 text-left min-h-[168px]">
                Nous faisons connaissance et vous me présentez votre activité, votre univers ainsi que vos besoins.
                De mon côté, je m'assure d'être la bonne personne pour vous accompagner.
              </p>
            </div>

            <div className="w-[130px] h-full flex flex-col items-start space-y-3">
              <div className="relative inline-flex items-center justify-center w-20 h-20">
                <img src={sun} alt="soleil" className="w-full h-full" />
                <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[#AA8F66] text-4xl font-bold font-newzen">2</p>
              </div>
              <h2 className="font-bold text-white leading-tight text-balance">Questionnaire rapide</h2>
              <p className="font-newzen font-medium text-white/95 text-sm leading-6 text-left min-h-[168px]">
                Je vous transmettrai quelques questions pour saisir pleinement votre vision.
              </p>
            </div>

            <div className="w-[230px] h-full flex flex-col items-start space-y-3">
              <div className="relative inline-flex items-center justify-center w-20 h-20">
                <img src={sun} alt="soleil" className="w-full h-full" />
                <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[#AA8F66] text-4xl font-bold font-newzen">3</p>
              </div>
              <h2 className="font-bold text-white leading-tight text-balance">Ajustement si besoin</h2>
              <p className="font-newzen font-medium text-white/95 text-sm leading-6 text-left min-h-[168px]">
                Vous me communiquez vos retours et nous procédons aux ajustements ensemble.
              </p>
            </div>

            <div className="w-[230px] h-full flex flex-col items-start space-y-3">
              <div className="relative inline-flex items-center justify-center w-20 h-20">
                <img src={sun} alt="soleil" className="w-full h-full" />
                <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[#AA8F66] text-4xl font-bold font-newzen">4</p>
              </div>
              <h2 className="font-bold text-white leading-tight text-balance">Remise des fichiers</h2>
              <p className="font-newzen font-medium text-white/95 text-sm leading-6 text-left min-h-[168px]">
                Je vous remets votre projet (et ses déclinaisons) dans tous les formats nécessaires (SVG, PNG, PDF vectoriel), accompagné de la palette de couleurs et des typographies.
              </p>
            </div>
          </div>

        <div className='flex justify-center'>
            <ButtonVariant onClick={() => alert("Coucou Poulpi!")}>Prendre votre rendez-vous gratuitement</ButtonVariant>
        </div>
        <div className='flex justify-center'>
          <img 
          src={sungroup}
          alt="groupement de soleils"
          />
        </div>
      </div>
      <div className='flex justify-center h-[90vh]'> 
      <img 
      src={demisun}
      alt="soleil décoration" 
      />
      </div>
    </div>
  )
}

export default Process