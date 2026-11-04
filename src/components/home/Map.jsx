import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { mapStyles } from "../../utils/constants";
import { useState } from "react";
// import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [hoveredCountry, setHoveredCountry] = useState("");
  const navigate = useNavigate();

  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <div className="container p-0 mt-14 pb-20">
      <h1 className="px-4 pb-6 text-3xl font-bold bg-linear-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent w-fit">
        Ülke Seçiniz
      </h1>

      <div className="border border-zinc-300 shadow-md rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden backdrop-blur-sm">
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={mapStyles}
                    data-tooltip-id="hover"
                    onMouseEnter={() => setHoveredCountry(`${geo.properties.name}`)}
                    onMouseLeave={() => setHoveredCountry("")}
                    onClick={() => navigate(`/country/${geo.properties.name}`)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        <Tooltip id="hover">{hoveredCountry}</Tooltip>
      </div>
    </div>
  );
};

export default Map;
