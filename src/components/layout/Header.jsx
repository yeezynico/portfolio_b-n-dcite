// import { useState } from "react"
import logo from '../../assets/img/logo.png'
import star from '../../assets/img/etoile.png'
import { Menu, X } from "lucide-react"
import { PopupButton } from "react-calendly"

export const Header = () => {
  // const [open, setOpen] = useState(false)

  return (
    <header className="mt-6 mb-10 px-6 md:px-10">
      <nav className="flex w-full items-center justify-between">

        <img src={logo} alt="Bene." className="w-24 md:w-32" />

        <ul className="hidden md:flex gap-12 text-[#ED9B40] font-newzen font-bold text-lg md:text-xl">
          <li>Services</li>
          <li>Process</li>
          <li>Portfolio</li>
        </ul>

        <div className="flex items-center gap-2 relative">
          <img src={star} alt="etoile" className="w-8 h-9 absolute -left-4 -top-3" />
            <PopupButton
                url="https://calendly.com/lutetebenedicte/30min"
                rootElement={document.getElementById("root")}
                text="Réserver votre appel gratuit"
                className="bg-[#ED9B40] text-white px-3.5 py-1 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
            />
          <img src={star} alt="etoile" className="w-5 h-6 absolute -right-2 -bottom-3" />
        </div>

        {/* <button 
          className="md:hidden text-[#ED9B40]" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button> */}
      </nav>

      {/* {open && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-xl p-6 space-y-6 text-center">
            <ul className="flex flex-col gap-6 text-[#ED9B40] font-newzen font-bold text-lg">
            <li>Services</li>
            <li>Process</li>
            <li>Portfolio</li>
            </ul>

            <div className="flex justify-center">
            <div className="relative inline-flex items-center justify-center">
                <img 
                src={star} 
                alt="etoile" 
                className="w-5 h-5 absolute -left-2 -top-1"
                />
                <PopupButton
                    url="https://calendly.com/lutetebenedicte/30min"
                    rootElement={document.getElementById("root")}
                    text="Réserver votre appel gratuit"
                    className="bg-[#ED9B40] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen"
                />
                <img 
                src={star} 
                alt="etoile" 
                className="w-3 h-4 absolute -right-0.5 -bottom-1.5"
                />
            </div>
            </div>
        </div>
      )} */}
    </header>
  )
}
