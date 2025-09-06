import logo from '../../assets/img/logo.png'
import { Button } from '../ui/Button'
import star from '../../assets/img/etoile.png'

export const Header = () => {
    return (
        <header className="flex items-center mt-4 mb-10 mx-8">
            <nav className="flex w-full items-center justify-between">
                <img src={logo} alt="Bene." className="w-24" />

                <ul className="flex gap-20 text-[#ED9B40] font-newzen font-bold text-xl">
                    <li>Services</li>
                    <li>Process</li>
                    <li>Portfolio</li>
                </ul>

                <div className="flex items-center gap-2 relative">
                    <img src={star} alt="etoile" className="w-7 h-7 absolute -left-4 -top-2" />
                    <Button>Réservez votre appel gratuit</Button>
                    <img src={star} alt="etoile" className="w-4 h-5 absolute -right-2.5 -bottom-1.5" />
                </div>
            </nav>
        </header>

    )
}