import { useEffect, useState } from "react";
import Item from "./Item";
import { statsApi } from "../../utils/api";
import Loader from "./../loader/index";
import millify from "millify";

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    statsApi
      .get("/reports/total")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container py-0">
      <div className="bg-white/95 backdrop-blur-md shadow-md rounded-2xl p-6 md:p-8 -mt-8.5 md:-mt-12 animate-fade-in">
        {loading ? (
          <Loader />
        ) : error ? (
          <p className="text-center text-red-400 font-medium">Üzgünüz bir sorun oluştu :(</p>
        ) : (
          <div className="grid grid-cols-3 gap-5 animate-slide-up">
            <Item color="text-pink-500" label="Toplam Vaka" value={millify(data.confirmed)} />
            <Item color="text-green-500" label="Aktif Vaka" value={millify(data.active)} />
            <Item color="text-gray-500" label="Toplam Vefat" value={millify(data.deaths)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
