import sun from '../../assets/img/soleil.png'
import img1 from '../../assets/img/JessMarried.png'
import img2 from '../../assets/img/Still.jpeg'
import img3 from '../../assets/img/Hobart.png'
import img4 from '../../assets/img/Eliite.png'
import img5 from '../../assets/img/StillLinkedin.png'
import img6 from '../../assets/img/Eliite-accueil.png'

const projects = [
  {
    image: [img5, img2],
    title: 'STILL',
    subtitle: 'B2B, Chariot élévateurs',
    desc: 'Publications réseaux sociaux',
  },
  {
    image: [img3],
    title: 'Hobart',
    subtitle: 'B2B, Lave-vaisselle',
    desc: 'Publications réseaux sociaux',
  },
  {
    image: [img6, img4],
    title: 'ELIITE',
    subtitle: 'B2B/B2C, Conciergerie',
    desc: 'Refonte site web',
  },
  {
    image: [img1],
    title: 'Jess Married & Events',
    subtitle: 'B2C, Wedding planner',
    desc: 'Création identité visuelle et site web',
  },
]

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white relative overflow-hidden">
      <div className="bg-[#AA8F66] pt-10 w-full mt-8 text-white">

        <div className="flex items-center gap-3 mb-10 pl-12">
          <img src={sun} alt="soleil" className="w-10 md:w-14" />
          <h1 className="font-newzen font-bold text-3xl md:text-5xl">
            Portfolio
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 px-8 pb-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#F6ECDF] rounded-[40px] p-6 flex flex-col gap-6"
            >

              <div>
                <h3 className="font-newzen text-[#ED9B40] text-4xl font-bold mb-2 ml-10">
                  {project.title}
                </h3>

                <div className="grid grid-cols-2 text-[#ED9B40] text-lg text-center">
                  <p className="opacity-80 italic">
                    {project.subtitle}
                  </p>

                  <p className="opacity-80 font-semibold">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div
                className={`grid ${
                  project.image.length === 1 ? "grid-cols-1" : "grid-cols-2"
                } gap-4`}
              >
                {project.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                    className="w-full h-auto rounded-xl"
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio