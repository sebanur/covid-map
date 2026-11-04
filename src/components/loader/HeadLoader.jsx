import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const HeadLoader = () => {
  return (
    <div data-testid="head-loader" className="flex justify-between items-center">
      <Link to="/" className="back-link group">
        <MdKeyboardArrowLeft className="group-hover:-translate-x-1 transition duration-300 size-5" />
        Geri
      </Link>

      <div className="flex items-center gap-4">
        <div className="h-10 w-30 bg-linear-to-r from-gray-400 via-gray-300 to-gray-400 rounded-xl animate-pulse" />
        <div className="h-10 w-16 bg-linear-to-r from-gray-400 via-gray-300 to-gray-400 rounded-xl animate-pulse" />
      </div>
    </div>
  );
};

export default HeadLoader;
