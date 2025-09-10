import { Button } from "../ui/Button"
import logo from '../../assets/img/logo.png'

export const Footer = () => {
    return (
        <footer className="p-6 md:p-8 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start text-center md:text-left">
                
                <div className="flex flex-col gap-4 md:mr-10">
                    <img src={logo} alt="Logo" className="w-32 md:w-44 mx-auto md:mx-0"/>
                    <p className="text-[#ED9B40] font-newzen font-medium text-sm md:text-md leading-relaxed">
                        Bonjour, je suis Bénédicte et je suis graphiste designer.
                        <br/><br/>
                        Je crée des visuels qui vous ressemblent, tout en restant percutants et captivants.
                        <br/><br/>
                        Je vous accompagne sur différents projets : l'identité de marque, les supports de communication ainsi que les webdesign.
                    </p>
                </div>

                <div>
                    <ul className="flex flex-col gap-6 md:gap-10 text-[#ED9B40] font-newzen font-bold text-lg md:text-xl">
                        <li>Services</li>
                        <li>Process</li>
                        <li>Portfolio</li>
                    </ul>
                </div>

                <div className="flex justify-center md:justify-start">
                    <Button>Prenez votre rendez-vous</Button>
                </div>
            </div>
            <div className="mt-10 pt-6 border-t border-[#ED9B40]/30 text-center">
                <p className="text-[#AA8F66] font-newzen text-sm md:text-base">
                    © 2025 Bénédicte – Tous droits réservés
                </p>
            </div>
        </footer>
    )
}
