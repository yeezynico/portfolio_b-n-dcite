import React from 'react'
import sunny from '../../assets/img/soleil-orange.png'
import { Button } from '../ui/Button'
import { PopupButton } from "react-calendly"
import photo from '../../assets/img/DymensBeauty - Shoot 2-23 1.png'
import bgImage from '../../assets/img/quadrillage.png'
import bgImage2 from '../../assets/img/tache.png'

const About = () => {
  return (
    <div
    className="h-screen w-full bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: `url(${bgImage})` }}
>
    <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center justify-center gap-10"
        style={{ backgroundImage: `url(${bgImage2})` }}
    >
        <div className="bg-[#FEEEDB] rounded-3xl w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-12 shadow-lg mr-96">
            <h2 className="text-[#AA8F66] font-newzen font-bold text-4xl">
                Ensemble donnons vie à votre marque grâce à un univers qui vous ressemble
            </h2>
        </div>

        <div className="flex items-center justify-center gap-10 text-[#ED9B40] font-newzen font-bold text-lg mr-96">
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone" className="w-6 h-6" />
                <p>Identité visuelle</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone" className="w-6 h-6" />
                <p>Support de communication</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone" className="w-6 h-6" />
                <p>Webdesign</p>
            </div>
        </div>

        <div className="w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col gap-6">
            <div className="flex justify-center">
                <PopupButton
                    url="https://calendly.com/esteves-melinda/30min"
                    rootElement={document.getElementById("root")}
                    text="Réserver votre appel gratuit"
                    className="bg-[#ED9B40] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
                />
            </div>
        </div>
    </div>

    <img 
    src={photo} 
    alt="photo" 
    className="absolute -bottom-30 right-0 h-[110vh] object-cover"
    />

</div>


  )
}

export default About