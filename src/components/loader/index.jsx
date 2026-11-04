import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div data-testid="loader" className="flex justify-center py-3.5 md:py-6">
      <FaSpinner className="animate-spin text-2xl text-pink-500" />
    </div>
  );
};

export default Loader;
