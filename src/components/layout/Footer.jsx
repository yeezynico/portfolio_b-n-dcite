import { Button } from "../ui/Button"


export const Footer = () => {
    return (
        <footer className="flex justify-start">
            <div>
                <p className="text-orange-500 flex justify-start">
                    Bonjour, je suis Bénédicte et je suis graphiste designer.
                    <br/>
                    Je crée des visuels qui vous ressemblent, tout en restant percutants et captivants.
                    <br/>
                    Je vous accompagne sur différents projets : l'identité de marque, les supports de communication ainsi que les webdesign.
                </p>
                <ul>
                    <li>Services</li>
                    <li>Process</li>
                    <li>Portfolio</li>
                </ul>
                <Button>Prenez votre rendez-vous</Button>
            </div>
        </footer>
    )
}