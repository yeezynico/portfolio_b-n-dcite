import React from 'react'
import semisun from '../../assets/img/demi-soleil-creme.png'
import sun from '../../assets/img/soleilO.png'
import {Button} from '../ui/Button'

const Service = () => {
  return (
    <div className='mb-20'>
        <div className='flex items-center'>
            <img src={sun} alt="soleil" className='w-14'/>
            <h1 className='font-newzen font-bold text-[#ED9B40] text-5xl'>Services</h1>
        </div>
        <div className='grid grid-cols-3 gap-4 justify-center'>
            <div>
                <img src={semisun} alt="soleil"/>
                <h2>Identité de marque</h2>
                <p>Logos, identités graphiques, chartes graphiques, ...</p>
            </div>
            <div>
                <img src={semisun} alt="soleil"/>
                <h2>Support de communication</h2>
                <p>Flyer, PLV, affiche, packaging, carte de visite, brochure, dépliant, ...</p>
            </div>
            <div>
                <img src={semisun} alt="soleil"/>
                <h2>Webdesign</h2>
                <p>Bannières animés, visuels pour réseaux sociaux, newsletters, emailings, ...</p>
            </div>
        </div>
        <div className='flex justify-center'>
                <Button onClick={() => alert("Coucou!")}>Réserver votre appel gratuit</Button>
        </div>
    </div>
  )
}

export default Service