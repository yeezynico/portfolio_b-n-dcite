import profile from '../../assets/img/Jess.png'
import demisun from '../../assets/img/demi-soleil-creme.png'

const Testimony = () => {
  return (
    <section className="bg-[#f6ecdf6b] pb-20">
      <div>

        <h1 className="font-newzen font-bold text-[#ED9B40] text-4xl md:text-6xl mb-16 pl-12 pt-18">
          Ils parlent mieux que moi...
        </h1>

        <p className="font-newzen font-normal justify-self-center text-[#ED9B40] text-[40px] leading-snug max-w-6xl">
          "Je voudrais remercier Bénédicte qui a répondu à toutes mes attentes !
          Elle a été très efficace et disponible pour la création de mon site web
          ainsi que mon logo. Je vous la recommande les yeux fermés !"
        </p>

        <div className="flex items-center gap-6 pl-50 mt-20">
        <div className="relative w-36 h-36 top-3">
          <img
            src={demisun}
            alt="Demi-soleil"
            className="absolute -top-10 -left-6"
          />
          <img
            src={profile}
            alt="Image de la personne qui témoigne"
            className="relative w-24 h-24 rounded-full object-cover object-top"
          />
        </div>

        <div className="font-newzen text-[#ED9B40] absolute left-90">
          <p className="text-2xl font-medium">Jessica P.</p> {/* texte plus gros */}
          <p className="text-xl opacity-80">Jess Married & Events</p> {/* texte plus gros */}
        </div>
      </div>
      </div>
    </section>
  )
}

export default Testimony
