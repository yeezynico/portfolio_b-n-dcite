import logo from '../../assets/img/soleil.png'
import { Button } from '../ui/Button'

export const Header = () => {
    return (
        <header className='flex'>
            <nav>
                <img src={logo} alt="Bene." className='w-10'/>
               <div className='grid grid-cols-3 gap-4 justify-center'>
                    <ul>
                        <li>Services</li>
                        <li>Process</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <Button>Prenez votre rendez-vous</Button>
            </nav>
        </header>
    )
}