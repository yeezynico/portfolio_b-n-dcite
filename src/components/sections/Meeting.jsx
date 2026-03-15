import bgImage from '../../assets/img/quadrillage.png'
import bgImage2 from '../../assets/img/tache.png'

const Meeting = () => {
  return (
    <>
    <div
        className="w-full h-[613px] bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <div
            className="w-full h-[613px] bg-cover bg-center flex flex-col items-center justify-center gap-10"
            style={{ backgroundImage: `url(${bgImage2})` }}
        >
        </div>
    </div>
    </>
  )
}

export default Meeting