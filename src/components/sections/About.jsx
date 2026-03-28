import React from "react";
import sunny from "../../assets/img/soleil-orange.png";
import photo from "../../assets/img/DymensBeauty - Shoot 2-23 1.png";
import bgImage from "../../assets/img/quadrillage.png";
import bgImage2 from "../../assets/img/tache.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-[300px] min-[500px]:max-md:h-[420px] md:h-[613px] bg-cover bg-center relative overflow-visible mt-5 md:mt-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="w-full h-[300px] min-[500px]:max-md:h-[420px] md:h-[613px] bg-cover bg-center flex flex-col items-center justify-center gap-10 max-md:gap-4 relative"
        style={{ backgroundImage: `url(${bgImage2})` }}
      >
        <div className="bg-[#FEEEDB] rounded-4xl w-2/3 p-14 shadow-lg mr-72 -ml-24 mt-20 max-md:bg-transparent max-md:shadow-none max-md:rounded-none max-md:w-[46%] max-md:p-0 max-md:mr-0 max-md:mt-6 max-md:self-start max-md:ml-[3%]">
          <h2 className="text-[#AA8F66] font-newzen font-bold text-5xl/15 max-[500px]:text-[18px] min-[500px]:max-md:text-[22px] max-md:leading-snug">
            Ensemble donnons vie à votre marque grâce à un univers qui vous
            ressemble
          </h2>
        </div>

        <div className="flex items-center justify-center gap-8 text-[#ED9B40] font-newzen font-bold text-2xl mr-96 -ml-4 max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-2 max-md:text-base max-md:mr-0 max-md:ml-[3%] max-md:w-[48%] max-md:self-start">
          <div className="flex items-center gap-2">
            <img
              src={sunny}
              alt="icone de soleil orange"
              className="w-9 h-9 max-md:w-5 max-md:h-5"
            />
            <p>Identité visuelle</p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={sunny}
              alt="icone de soleil orange"
              className="w-9 h-9 max-md:w-5 max-md:h-5"
            />
            <p>Support de communication</p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={sunny}
              alt="icone de soleil orange"
              className="w-9 h-9 max-md:w-5 max-md:h-5"
            />
            <p>Webdesign</p>
          </div>
        </div>

        <div className="w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col gap-6 max-md:w-[48%] max-md:self-start max-md:ml-[3%]">
          <div className="flex justify-center max-md:justify-start">
            <button
              className="bg-[#ED9B40] text-white rounded-2xl font-bold hover:bg-[#d9862e] transition font-newzen mb-20 text-xs px-2 py-1.5 min-[500px]:max-md:text-sm min-[501px]:max-md:px-3 min-[501px]:max-md:py-2  md:text-2xl md:px-4 md:py-2  max-md:mb-0"
              onClick={() => navigate("/meeting")}
            >
              Réserver votre appel gratuit
            </button>
          </div>
        </div>
      </div>

      <img
        src={photo}
        alt="photo"
        className="absolute bottom-0 right-0 w-auto object-contain h-[320px] min-[500px]:max-md:h-[420px] md:h-auto"
      />
    </div>
  );
};

export default About;
