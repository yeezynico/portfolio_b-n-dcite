import React from 'react'
import sunny from '../../assets/img/soleil-orange.png'
import { PopupButton } from "react-calendly"
import photo from '../../assets/img/DymensBeauty - Shoot 2-23 1.png'
import bgImage from '../../assets/img/quadrillage.png'
import bgImage2 from '../../assets/img/tache.png'
import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();

  return (

    <div
    className="w-full h-[613px] bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: `url(${bgImage})` }}
>
    <div
        className="w-full h-[613px] bg-cover bg-center flex flex-col items-center justify-center gap-10"
        style={{ backgroundImage: `url(${bgImage2})` }}
    >
        <div className="bg-[#FEEEDB] rounded-4xl w-2/3 p-14 shadow-lg mr-72 -ml-24 mt-20">
            <h2 className="text-[#AA8F66] font-newzen font-bold text-5xl/15">
                Ensemble donnons vie à votre marque grâce à un univers qui vous ressemble
            </h2>
        </div>

        <div className="flex items-center justify-center gap-8 text-[#ED9B40] font-newzen font-bold text-2xl mr-96 -ml-4">
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone de soleil orange" className="w-9 h-9" />
                <p>Identité visuelle</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone de soleil orange" className="w-9 h-9" />
                <p>Support de communication</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={sunny} alt="icone de soleil orange" className="w-9 h-9" />
                <p>Webdesign</p>
            </div>
        </div>

        <div className="w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col gap-6">
            <div className="flex justify-center">
                <button className="bg-[#ED9B40] text-white px-4 py-2 rounded-2xl text-2xl font-bold hover:bg-[#d9862e] transition font-newzen mb-20"
                onClick={() => navigate('/meeting')}>
                    Réserver votre appel gratuit
                </button>
            </div>
        </div>
    </div>

    <img 
    src={photo} 
    alt="photo" 
    className="absolute -bottom-5 right-0 object-cover"
    />

</div>


  )
}

export default About
