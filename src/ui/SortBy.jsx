import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ options }) => {
  const [searchParmas, setSearchParams] = useSearchParams();

  const sortBy = searchParmas.get("sortBy") || "";

  function handleChange(e) {
    searchParmas.set("sortBy", e.target.value);
    setSearchParams(searchParmas);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
};

export default SortBy;
