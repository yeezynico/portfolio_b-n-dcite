import React from 'react'
import semisun from '../../assets/img/demi-soleil-creme.png'
import sun from '../../assets/img/soleilO.png'
import {Button} from '../ui/Button'

const Service = () => {
  return (
    <div className='mb-20'>
        <div className='flex items-center ml-10 mt-10'>
            <img src={sun} alt="soleil" className='w-14 mr-3 mb-1'/>
            <h1 className='font-newzen font-bold text-[#ED9B40] text-5xl'>Services</h1>
        </div>
        <div className='grid grid-cols-3 items-center gap-10 my-16 mx-18'>
            <div className='flex flex-col p-14'>
                <img src={semisun} alt="soleil" className='w-52 mb-4'/>
                <h2 className='text-[#AA8F66] font-newzen font-bold text-lg mt-3'>Identité de marque</h2>
                <p className='text-[#ED9B40] font-newzen font-medium mt-3 text-left w-48'>Logos, identités graphiques, chartes graphiques</p>
            </div>
            <div className='flex flex-col p-14'>
                <img src={semisun} alt="soleil" className='w-52 mb-4'/>
                <h2 className='text-[#AA8F66] font-newzen font-bold text-lg mt-3'>Support de communication</h2>
                <p className='text-[#ED9B40] font-newzen font-medium mt-3 text-left '>Flyer, PLV, affiche, packaging, carte de visite, brochure, dépliant</p>
            </div>
            <div className='flex flex-col p-14'>
                <img src={semisun} alt="soleil" className='w-52 mb-4'/>
                <h2 className='text-[#AA8F66] font-newzen font-bold text-lg mt-3'>Webdesign</h2>
                <p className='text-[#ED9B40] font-newzen font-medium mt-3 text-left w-48'>Bannières animés, visuels pour réseaux sociaux, newsletters, emailings</p>
            </div>
        </div>
        <div className='flex justify-center'>
                <Button onClick={() => alert("Coucou!")}>Réserver votre appel gratuit</Button>
        </div>
    </div>
  )
}

export default Service