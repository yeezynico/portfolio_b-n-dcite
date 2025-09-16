import React from 'react'
import sun from '../../assets/img/soleil.png'
import demisun from '../../assets/img/demi-soleil-orange.png'
import afronation from '../../assets/img/Afronation.png'
import mobileafronation from '../../assets/img/Mobile.png'
import afronationbox from '../../assets/img/Afronation box.png'
import ohbonpanier from '../../assets/img/Panier.png'
import legume from '../../assets/img/Legume.png'
import legumes from '../../assets/img/Legumes.png'
// import kiabi from '../../assets/img/Kiabi.png'
// import beebs from '../../assets/img/Beebs.png'
// import beebsk from '../../assets/img/BeebsK.png'


const Portfolio = () => {
  return (
    <div className='bg-white'>
      <div className='bg-[#AA8F66] pt-10 w-full bg-cover bg-center mt-5 text-white'>
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
            <img src={sun} alt="soleil" className="w-10 md:w-14" />
            <h1 className="font-newzen font-bold text-white text-3xl md:text-5xl">Portfolio</h1>
        </div>
        <div>
          <img src={demisun} alt="demi soleil" className='rotate-90 w-[60vh]'/>

        <div className="grid grid-cols-2">
          <div>
            <img src={afronation} alt="Afro Nation"/>
          </div>

          <div>
            <img src={mobileafronation} alt="Afro Nation App"/>
          </div>

          <div>
            <img src={afronationbox} alt="Afro Nation Box"/>
          </div>
        </div>
          
        <div className="grid grid-cols-2">
          <div>
            <img src={ohbonpanier} alt="Oh Bon Panier"/>
          </div>

          <div>
            <img src={legumes} alt="Légumes"/>
          </div>

          <div>
            <img src={legume} alt="Légumes"/>
          </div>
        </div>
        {/* 
        <div className="flex items-center justify-center p-6">
          <img src={beebs} alt="Beebs"/>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <img src={beebsk} alt="Beebs Clothes"/>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
          <img src={kiabi} alt="Beebs Clothes"/>
        </div> 
        */}

          <img src={demisun} alt="demi soleil" className='w-[60vh]'/>

        </div>
      </div>
    </div>
  )
}

export default Portfolio