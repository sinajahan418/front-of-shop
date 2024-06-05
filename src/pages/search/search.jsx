import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/index/NavBar/NavBar";
import SearchCard from "../../components/index/searchCard/SearchCard";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = useLocation();
  console.log(query.search);
  const fetchQueryParams = async () => {
    const res = await fetch("/api/search");
    const responsData = await res.json();
    setData(responsData.data);
  };
  console.log(data);
  useEffect(() => {
    fetchQueryParams();
  }, []);
  return (
    <>
      <NavBar />
      <div className="pt-24 serach flex p-4 overflow-x-scroll hidScrole">
        {data.map((item, index) => (
          <SearchCard serchParams={query.search} key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Search;
