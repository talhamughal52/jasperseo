"use client";
import { useEffect, useState } from "react";
import Select from "react-select";

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        data.countries.map((country) => {
          if (country.value == "US") {
            setSelectedCountry(country);
          }
        });
      });
  }, []);
  const getCountryName = (label) => {
    const parts = label.split(" ");
    return parts.slice(1).join(" ");
  };
  return (
    <>
      {selectedCountry.label && (
        <>
          <input
            type="hidden"
            name="country"
            value={getCountryName(selectedCountry.label)}
          />
          <input
            type="hidden"
            name="countryCode"
            value={selectedCountry.value}
          />
        </>
      )}
      <Select
        options={countries}
        required
        value={selectedCountry}
        onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      />
    </>
  );
};

export default CountrySelect;
