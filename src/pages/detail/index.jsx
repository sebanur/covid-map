import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restApi, statsApi } from "../../utils/api";
import Head from "../../components/details/Head";
import Content from "../../components/details/Content";
import ContentLoader from "./../../components/loader/ContentLoader";
import HeadLoader from "../../components/loader/HeadLoader";
import Error from "../../components/error";

const Detail = () => {
  const { country } = useParams();

  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        // Ülke ve COVID verilerini paralel olarak getir
        const [res1, res2] = await Promise.all([
          restApi.get(`/countries/v5?q=${encodeURIComponent(country)}&limit=1`),
          statsApi.get("/reports", {
            params: { q: country },
          }),
        ]);

        // REST Countries API verileri
        const countryData = res1.data.data.objects[0];

        // COVID API verileri
        const covidData = res2.data?.data?.[0] || {};

        // Ülke bilgilerini düzenle
        const details = {
          name: countryData?.name?.common,
          continents: countryData?.continents,
          capital: countryData?.capital || [],
          flag: {
            alt: countryData?.flags?.alt,
            svg: countryData?.flags?.svg,
          },
          population: countryData?.population,
          language: countryData?.languages
            ? Object.values(countryData.languages)[0]
            : null,
          currency: countryData?.currencies
            ? Object.values(countryData.currencies)[0]?.name
            : null,

          // COVID-19 bilgileri
          fatality_rate: covidData?.fatality_rate,
          confirmed: covidData?.confirmed,
          active: covidData?.active,
          deaths: covidData?.deaths,
        };

        if (!cancelled) {
          setCountryDetails(details);
        }
      } catch (err) {
        console.error("Country details error:", err.response?.data || err);

        if (!cancelled) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Ülke bilgileri alınamadı.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchDetails();

    return () => {
      cancelled = true;
    };
  }, [country]);

  return (
    <div className="flex-1 min-h-[calc(100vh-76px)] grid place-items-center">
      <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-lg min-h-[65%] rounded-3xl py-8 px-10 max-w-4xl max-md:w-full md:w-[80%] relative z-10 animate-fade-in">
        {loading ? (
          <>
            <HeadLoader />
            <ContentLoader />
          </>
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <Head details={countryDetails} />
            <Content details={countryDetails} />
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
