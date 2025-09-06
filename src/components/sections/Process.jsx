import React from 'react'
import sun from '../../assets/img/soleil.png'
import { ButtonVariant } from '../ui/Button'

const Process = () => {
  return (
      <div className='bg-[#ED9B40] h-96'>
          <div className='flex items-center'>
              <img src={sun} alt="soleil" className='w-14'/>
              <h1 className='font-newzen font-bold text-white text-5xl'>Process</h1>
          </div>
          <div className='grid grid-cols-4 gap-4 justify-center'>
              <div>
                <div className="relative inline-block">
                  <img src={sun} alt="soleil" className="w-20 h-20" />
                  <p className="absolute top-6 left-8 text-black text-xl font-bold">1</p>
                </div>
                  <h2>Prise de rendez-vous</h2>
                  <p className='font-newzen font-medium text-sm'>Nous faisons connaissance et vous me présentez votre activité, votre univers ainsi que vos besoins. De mon côté, je m'assure d'être la bonne personne pour vous accompagner</p>
              </div>
              <div>
                <div className="relative inline-block">
                  <img src={sun} alt="soleil" className="w-20 h-20" />
                  <p className="absolute top-6 left-8 text-black text-xl font-bold">2</p>
                </div>
                  <h2>Questionnaire rapide</h2>
                  <p className='font-newzen font-medium text-sm'>Je vous transmettrai quelques questions pour saisir pleinement votre vision.</p>
              </div>
              <div>
                <div className="relative inline-block">
                  <img src={sun} alt="soleil" className="w-20 h-20" />
                  <p className="absolute top-6 left-8 text-black text-xl font-bold">3</p>
                </div>
                  <h2>Ajustement si besoin</h2>
                  <p className='font-newzen font-medium text-sm'>Vous me communiquez vos retours et nous procédons aux ajustements ensemble.</p>
              </div>
              <div>
                <div className="relative inline-block">
                  <img src={sun} alt="soleil" className="w-20 h-20" />
                  <p className="absolute top-6 left-8 text-black text-xl font-bold">4</p>
                </div>
                  <h2>Remise des fichiers</h2>
                  <p className='font-newzen font-medium text-sm'>Je vous remets votre projet(et ses déclinaisons) dans tous les formats nécessaires (SVG, PNG, PDF vectoriel), accompagné de la palette de couleurs et des typographies.</p>
              </div>
          </div>
        <div className='flex justify-center'>
            <ButtonVariant onClick={() => alert("Coucou Poulpi!")}>Prendre votre rendez-vous gratuitement</ButtonVariant>
        </div>
      </div>
  )
}

export default Process