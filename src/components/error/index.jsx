import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";

const Error = ({ message }) => {
  return (
    <div className="my-50 p-5 rounded-lg font-semibold text-center text-red-500 space-y-5">
      <BiError className="mx-auto size-15" />

      <h2 className="text-zinc-800">Üzgünüz bir sorun oluştu :(</h2>

      <p>{message}</p>

      <Link to="/" className="back-link w-fit mx-auto">
        Geri Dön
      </Link>
    </div>
  );
};

export default Error;
