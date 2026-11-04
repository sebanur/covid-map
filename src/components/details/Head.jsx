import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const Head = ({ details }) => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/" className="back-link group">
        <MdKeyboardArrowLeft className="group-hover:-translate-x-1 transition duration-300 size-5" />
        Geri
      </Link>

      <div className="flex items-center gap-4 animate-slide-up">
        <h1 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
          {details?.name}
        </h1>

        <img
          src={details?.flag?.svg}
          alt={details?.flag?.alt}
          className="w-16 h-12 object-cover rounded-lg shadow-md border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Head;
