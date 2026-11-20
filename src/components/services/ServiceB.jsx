// Services Logos
import softwareDevelopment from "../../assets/servicesIcon/softwareDevelopment.svg";
import cloudSolutions from "../../assets/servicesIcon/cloudSolutions.svg";
import CyberSecuritySolution from "../../assets/servicesIcon/CyberSecuritySolution.svg";
import DataAnalytics from "../../assets/servicesIcon/DataAnalytics.svg";
import MigrationsAndSystemIntegration from "../../assets/servicesIcon/MigrationsAndSystemIntegration.svg";
import WorkplaceModernizationSolution from "../../assets/servicesIcon/WorkplaceModernizationSolution.svg";
import AdvancedInfrastructure from "../../assets/servicesIcon/AdvancedInfrastructure.svg";
import NetworkModernizationSolution from "../../assets/servicesIcon/NetworkModernizationSolution.svg";
import ManagedServiceAndOutsourcing from "../../assets/servicesIcon/ManagedServiceAndOutsourcing.svg";
import SmartCustomerExperienceSolutions from "../../assets/servicesIcon/SmartCustomerExperienceSolutions.svg";

// Services Bg Images
import softwareDevelopmentBg from "../../assets/serviceBgImgs/softwareDevelopmentBg.jpg";
import cloudSolutionsBg from "../../assets/serviceBgImgs/cloudSolutionsBg.jpg";
import CyberSecuritySolutionBg from "../../assets/serviceBgImgs/CyberSecuritySolutionBg.jpg";
import DataAnalyticsBg from "../../assets/serviceBgImgs/DataAnalyticsBg.jpg";
import MigrationsAndSystemIntegrationBg from "../../assets/serviceBgImgs/MigrationsAndSystemIntegrationBg.jpg";
import WorkplaceModernizationSolutionBg from "../../assets/serviceBgImgs/WorkplaceModernizationSolutionBg.jpg";
import AdvancedInfrastructureBg from "../../assets/serviceBgImgs/AdvancedInfrastructureBg.jpg";
import NetworkModernizationSolutionBg from "../../assets/serviceBgImgs/NetworkModernizationSolutionBg.jpg";
import ManagedServiceAndOutsourcingBg from "../../assets/serviceBgImgs/ManagedServiceAndOutsourcingBg.jpg";
import SmartCustomerExperienceSolutionsBg from "../../assets/serviceBgImgs/SmartCustomerExperienceSolutionsBg.jpg";

const services = [
  {
    id: "1",
    img: softwareDevelopment,
    title: "Software Development",
    description:
      "In a rapidly changing digital environment, off-the-shelf software often falls short. Our custom solutions address your unique challenges, streamlining operations and driving innovation with scalable, high-quality software that ensures seamless integration and long-term success",
    bgImg: softwareDevelopmentBg,
  },
  {
    id: "2",
    img: cloudSolutions,
    title: "Cloud Solution",
    description:
      "Modernize, migrate, manage, and optimize cloud infrastructure with multi-cloud strategies, automation, and top security practices. We guide you through your cloud journey, from migration to management, enhancing growth and value across your enterprise",
    bgImg: cloudSolutionsBg,
  },
  {
    id: "3",
    img: CyberSecuritySolution,
    title: "Cyber Security Solution",
    description:
      "The evolving cyber threat landscape poses risks that many companies can’t manage in-house. Our custom cybersecurity solutions protect your technology and data, ensuring business continuity and safeguarding against costly breaches and reputational damage with expert, tailored defense strategies",
    bgImg: CyberSecuritySolutionBg,
  },
  {
    id: "4",
    img: DataAnalytics,
    title: "Data Analytics",
    description:
      "Data is growing rapidly, and businesses must quickly derive insights from it. Our cost-effective Business Intelligence (BI) and Analytics services offer a solid foundation for actionable insights, enabling faster, informed decision-making and efficient data management",
    bgImg: DataAnalyticsBg,
  },
  {
    id: "5",
    img: MigrationsAndSystemIntegration,
    title: "Migrations & System Integration",
    description:
      "Enterprises often face information silos from various technology solutions. Identiko Solutions connects disparate systems, enabling seamless collaboration across teams without disrupting existing systems. Our integration services enhance delivery speed, reporting, and automation for efficient data synchronization and process management",
    bgImg: MigrationsAndSystemIntegrationBg,
  },
  {
    id: "6",
    img: WorkplaceModernizationSolution,
    title: "Workplace Modernization Solution",
    description:
      "Transforming the workplace requires a holistic strategy integrating technology, operations, culture, and employee experience. We provide cost-efficient, secure platforms that enhance mobility, productivity, collaboration, and security, empowering workers in a digitally advanced, automated environment",
    bgImg: WorkplaceModernizationSolutionBg,
  },
  {
    id: "7",
    img: AdvancedInfrastructure,
    title: "Advanced Infrastructure Solution",
    description:
      "Today’s IT environments are complex, requiring interconnected systems that deliver secure, scalable, and resilient infrastructure. We design and implement effective IT solutions that meet real-world demands, expertly pairing top technologies to fit each client’s needs",
    bgImg: AdvancedInfrastructureBg,
  },
  {
    id: "8",
    img: NetworkModernizationSolution,
    title: "Network Modernization Solution",
    description:
      "Aging networks pose challenges like higher failure rates and compromised security, limiting responsiveness and business opportunities. Network modernization is crucial for digital transformation, as IT leaders seek agile, software-driven solutions to meet evolving demands and enhance network agility",
    bgImg: NetworkModernizationSolutionBg,
  },
  {
    id: "9",
    img: ManagedServiceAndOutsourcing,
    title: "Managed Service & Outsourcing",
    description:
      "Modern businesses need advanced technology to thrive, but managing data growth, apps, multiclouds, and cyberthreats is challenging. Our Managed Services and Outsourcing provide expert support to handle these tasks, optimizing your IT environment and supporting innovation",
    bgImg: ManagedServiceAndOutsourcingBg,
  },
  {
    id: "10",
    img: SmartCustomerExperienceSolutions,
    title: "Smart Customer Experience Solutions",
    description:
      "Customer expectations are evolving rapidly, pushing organizations to adapt. As consumers go digital-first, we offer advanced AI and contact center analytics to enhance customer experience, identify key touchpoints, and use data analytics for improved business results",
    bgImg: SmartCustomerExperienceSolutionsBg,
  },
];

const ServiceB = () => {
  return (
    <div id="section-1" className="w-full mt-16">
      <div className="max-w-screen-xl mx-auto text-center items-center justify-center">
        <div className="text-center text-black flex flex-col gap-1">
          <p className="text-xl md:text-3xl font-bold">
            {" "}
            SOFTWARE & IT SOLUTIONS{" "}
          </p>
          <p className="text-sm md:text-xl md:ml-40 md:mr-40 text-center flex justify-center items-center">
            {" "}
            From development to integration, we deliver robust solutions
            tailored to your business needs{" "}
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto py-10 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] md:gap-[2%] px-3 md:px-12 place-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className="w-[100%] group cursor-pointer border rounded-md relative h-fit flex flex-col items-center
                        overflow-hidden bg-[#ffffff] shadow-md hover:shadow-xl
                        grid-cols-1
                        text-center duration-500 pb-20 pt-20"
            >
              <div
                className={`card-bg absolute bg-cover bg-center bg-no-repeat inset-0 transition-opacity duration-500 ${service.id}`}
                style={{ backgroundImage: `url(${service.bgImg})` }}
              ></div>
              <div className="overlay absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>

              <img
                src={service.img}
                className=" title w-20 z-10 group-hover:filter group-hover:invert group-hover:brightness-0 mt-[-40px] mb-20 group-hover:text-white  group-hover:translate-y-[-300%]"
                alt={service.title}
              />
              <p
                className="absolute description text-balance text-base md:text-lg mt-16 mb-12 md:mb-0 font-bold z-10 group-hover:text-white group-hover:translate-y-[-550%]
              md:group-hover:translate-y-[-350%]"
              >
                {service.title}
              </p>
              <p className="absolute description px-2 md:px-8 text-center text-base md:text-md mt-28 mb-12 md:mb-10 z-10 group-hover:text-white w-fit group-hover:w-full group-hover:translate-y-[-70%] group-hover:text-overflow-ellipsis">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide-up{
           from{
            transform: translateY(100%);
            opacity: 0
            }
             to{
            transform: translateY(0%);
              opacity: 1
            }
          }
          .animate-slide-up {
          animation: slide-up 2s ease-out;
        }

        .group:hover img{
          opacity: 1;
        }

         .group:hover .title{
          transform: translateY(0)
          transition: transform 0.5s ease-in-out
        }

          .group:hover .description{
          transform: translateY(100%)
          transition: transform 0.5s ease-in-out
        }

       .details {
          opacity: 0;
          transform: translateY(20px);
        }

          .group:hover .details{
          transform: translateY(0)
          transition: transform 0.5s ease-in-out
          opacity: 1;
        }

        .card-bg{
          opacity: 0;
        }
        .group:hover .card-bg{
          opacity: 1;
        }

         .title {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          transition: all 1s ease-in-out;
        }

        .description {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          transition: all 1s ease-in-out;
        }

        .group:hover .description {
        -webkit-line-clamp:unset;
        max-height: 500px;
        overflow: visible
        }
        `}
      </style>
    </div>
  );
};

export default ServiceB;
