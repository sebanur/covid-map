import { PiVirus } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b border-white/10 bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 text-white shadow-md backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <PiVirus className="text-4xl text-pink-500 group-hover:text-pink-400 group-hover:rotate-180 transition-all duration-300" />
          <span className="font-bold text-xl">Covid-19</span>
        </Link>

        <nav className="flex gap-6">
          <Link to="/" className="header-link">
            Anasayfa
          </Link>
          <Link to="/" className="header-link">
            Sonuçlarımız
          </Link>
          <Link to="/" className="header-link max-md:hidden">
            Hakkımızda
          </Link>
          <Link to="/" className="header-link max-md:hidden">
            İletişim
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
