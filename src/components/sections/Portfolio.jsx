import React from 'react'
import sun from '../../assets/img/soleil.png'
import demisun from '../../assets/img/demi-soleil-orange.png'


const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white relative overflow-hidden">
      <div className="bg-[#AA8F66] pt-10 w-full bg-cover bg-center mt-5 text-white relative">

        <div className="flex items-center justify-center md:justify-start gap-3 mb-10 relative z-10">
          <img src={sun} alt="soleil" className="w-10 md:w-14" />
          <h1 className="font-newzen font-bold text-white text-3xl md:text-5xl">
            Portfolio
          </h1>
        </div>

       </div>
       </div>

  )
}

export default Portfolio
