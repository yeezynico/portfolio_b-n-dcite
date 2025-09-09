import { Button } from "../ui/Button"
import logo from '../../assets/img/logo.png'

export const Footer = () => {
    return (
        <footer className="p-8">
            <div className="grid grid-cols-3 gap-10 items-start">
                <div className="flex flex-col gap-4 mr-10">
                    <img src={logo} alt="Logo" className="w-44"/>
                    <p className="text-[#ED9B40] font-newzen font-medium text-md">
                        Bonjour, je suis Bénédicte et je suis graphiste designer.
                        <br/><br/>
                        Je crée des visuels qui vous ressemblent, tout en restant percutants et captivants.
                        <br/><br/>
                        Je vous accompagne sur différents projets : l'identité de marque, les supports de communication ainsi que les webdesign.
                    </p>
                </div>

                <div>
                    <ul className="flex flex-col ml-10 gap-10 text-[#ED9B40] font-newzen font-bold text-xl">
                        <li>Services</li>
                        <li>Process</li>
                        <li>Portfolio</li>
                    </ul>
                </div>

                <div className="flex items-start">
                    <Button>Prenez votre rendez-vous</Button>
                </div>
            </div>
        </footer>
    )
}