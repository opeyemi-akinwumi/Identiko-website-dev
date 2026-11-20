import servicesHeroBg from "../../assets/heroSectionBg/servicesHeroBg.jpg";

const CTAServices = () => {
  return (
    <div
      className="bg-no-repeat bg-cover relative h-[40vh] md:h-[70vh] w-full z-1"
      style={{
        backgroundImage: `url(${servicesHeroBg})`,
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="absolute md:z-50 text-3xl md:text-5xl text-white w-full h-full  flex items-end md:justify-start justify-center">
        <div className="block font-extrabold text-shadow-xl mb-[15%] transform animate-slide-up mx-auto">
          Our Services
        </div>
      </div>

      <style>
        {`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`}{" "}
      </style>
    </div>
  );
};

export default CTAServices;
