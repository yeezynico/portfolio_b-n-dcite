// import { useState } from "react"
import logo from '../../assets/img/Logo.svg'
import star from '../../assets/img/etoile.png'
import { Menu, X } from "lucide-react"
import { PopupButton } from "react-calendly"

export const Header = () => {
  // const [open, setOpen] = useState(false)

  return (
    <header className="mt-8 mb-14 px-6 md:px-10">
      <nav className="flex w-full items-center justify-between">

        <img src={logo} alt="Bene." className="w-24 md:w-38" />

        <ul className="hidden md:flex gap-18 text-[#ED9B40] font-newzen font-bold text-2xl">
          <li><a href="#services" className='ml-8'>Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>

        <div className="relative inline-block">
          <PopupButton
            url="https://calendly.com/lutetebenedicte/30min"
            rootElement={document.getElementById("root")}
            text="Réserver votre appel gratuit"
            className="relative z-10 bg-[#ED9B40] text-white text-[22px] px-3.5 py-1 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
          />

          <img
            src={star}
            alt="etoile"
            className="w-8 h-9 absolute -left-4 -top-3 pointer-events-none z-20"
          />
          <img
            src={star}
            alt="etoile"
            className="w-5 h-6 absolute -right-2 -bottom-3 pointer-events-none z-20"
          />
        </div>
      </nav>
    </header>
  )
}
