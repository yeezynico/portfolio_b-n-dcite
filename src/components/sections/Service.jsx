import React from 'react'
import sun from '../../../public/img/demi-soleil-creme.png'
import {Button} from '../ui/Button'

const Service = () => {
  return (
    <div>
        <h1>Services</h1>
        <div className='grid grid-cols-3 gap-4 justify-center'>
            <div>
                <img src={sun} alt="soleil"/>
                <h2>Identité de marque</h2>
                <p>Logos, identités graphiques, chartes graphiques, ...</p>
            </div>
            <div>
                <img src={sun} alt="soleil"/>
                <h2>Support de communication</h2>
                <p>Flyer, PLV, affiche, packaging, carte de visite, brochure, dépliant, ...</p>
            </div>
            <div>
                <img src={sun} alt="soleil"/>
                <h2>Webdesign</h2>
                <p>Bannières animés, visuels pour réseaux sociaux, newsletters, emailings, ...</p>
            </div>
        </div>
        <div className='flex justify-center'>
                <Button onClick={() => alert("Coucou Poulpi!")}>Réserver votre appel gratuit</Button>
        </div>
    </div>
  )
}

export default Service