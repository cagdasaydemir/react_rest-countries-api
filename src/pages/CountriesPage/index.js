import React from "react";
import Countries from "../../components/Countries";
import Filter from "../../components/Filter";
import "./index.scss";

const CountriesPage = () => {
  return (
    <>
      <Filter />
      <Countries />
    </>
  );
};

export default CountriesPage;
