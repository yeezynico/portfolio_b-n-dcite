import React from 'react'
import sunny from '../../assets/img/soleil-orange.png'
import { Button } from '../ui/Button'
import photo from '../../assets/img/DymensBeauty - Shoot 2-23 1.png'

const About = () => {
  return (
    <div className="mb-10 border-2">
        <div className="bg-[url('../../../assets/img/tache.png')]">
            <div className='bg-[#FEEEDB] rounded-xl flex w-96 h-60'>
                <h2 className='text-[#AA8F66] font-newzen font-bold text-3xl'>Ensemble donnons vie à votre marque grâce à un univers qui vous ressemble</h2>
            </div>
            <div className='font-newzen font-bold text-lg text-[#ED9B40] flex gap-5'>
                <img src={sunny}/>
                <p>Identité visuelle</p>

                <img src={sunny}/>
                <p>Support de communication</p>

                <img src={sunny}/>
                <p>Webdesign</p>
            </div>
            <Button>Réserver votre appel gratuit</Button>
            <div className='flex justify-end  h-96'>
                <img src={photo} alt="photo"/>
            </div>
        </div>
    </div>
  )
}

export default About