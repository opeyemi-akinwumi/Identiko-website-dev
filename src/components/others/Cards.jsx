import PropTypes from "prop-types";
import fingerprint_scanner from "../../assets/aboutUsPage/fingerprint_scanner.png";
import laptop from "../../assets/aboutUsPage/laptop.png";
import face_scanning from "../../assets/aboutUsPage/face_scanning.png";
import card_scanner from "../../assets/aboutUsPage/card_scanner.png";

const Card = ({ title, description, bgColor, borderColor }) => {
  return (
    <div className="relative max-w-sm w-full mx-auto md:mb-7">
      <div
        className={`absolute inset-0 ${bgColor} transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6`}
      />
      <div className="relative z-10 bg-white p-6 sm:p-8 shadow-lg h-full flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center mb-4">
          <span
            className={`w-8 h-1 sm:w-12 sm:h-1 block mr-3 ${borderColor}`}
          />
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg tracking-widest">
          {description}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 relative z-10 p-2 bg-yellow-500">
      <img src={fingerprint_scanner} alt="" />
      <img src={laptop} alt="" />
      <img src={face_scanning} alt="" />
      <img src={card_scanner} alt="" />
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8">
      <Card
        title="Our Vision"
        description="To be a Leading, Competent and Dependable Information Communication and Technology Solutions and Services Provider."
        bgColor="bg-blue-500"
        borderColor="bg-blue-500"
      />
      <div className="relative max-w-sm w-full mx-auto md:mb-7">
        <div className="absolute inset-0 bg-yellow-500 transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6" />
        <ImageGrid />
      </div>

      <Card
        title="Our Mission"
        description="To create a service-based company which drives innovation, technology and economic development for our customers while building a growing and sustainable business model that provides value and a sense of pride to everyone."
        bgColor="bg-blue-900"
        borderColor="bg-blue-900"
      />
    </div>
  );
};

export default Cards;
