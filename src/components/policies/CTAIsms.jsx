import ismsPolicyHeroBg from "../../assets/heroSectionBg/ismsPolicyHeroBg.jpg";

const CTAIsms = () => {
  return (
    <div
      className="bg-no-repeat bg-cover relative pb-[4%] pt-[4%] w-full z-1"
      style={{
        backgroundImage: `url(${ismsPolicyHeroBg})`,
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="max-w-screen-xl mx-auto mt-4 md:mt-0 mb-4 md:mb-0 flex flex-col ">
        <div className="font-semibold text-[100%] md:text-[200%] md:text-md mb-2 text-white z-10 text-center">
          INTEGRATED MANAGEMENT
          <br />
          SYSTEM POLICY
          <div className="text-base">ISO 27701:2019 PIMS</div>
          <div className="text-base">ISO 27001:2013 ISMS</div>
        </div>
      </div>
    </div>
  );
};

export default CTAIsms;
