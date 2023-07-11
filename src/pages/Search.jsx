import React, { useEffect, useState } from "react";
import "./Search.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { useStateValue } from "../StateProvider";

const searchItems = [];

function Search() {
  const [searchParams] = useSearchParams();
  const [Data, setData] = useState(null);
  const [{ basket, user, searchKey }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "UPDATE_SEARCHKEY",
      searchTerm: searchParams.get("q"),
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: `https://amazon-data-scraper124.p.rapidapi.com/search/${searchParams.get(
        "q"
      )}`,
      params: {
        api_key: process.env.SEARCH_API_KEY,
      },
      headers: {
        "X-RapidAPI-Key": "aab6896f79msh079f5e99cbba5afp1fe8edjsn744d4b9edea2",
        "X-RapidAPI-Host": "amazon-data-scraper124.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search">
      <div className="searchpage_products">
        {Data ? (
          Data.results?.map((e, i) => (
            <Product
              key={
                e.url + Math.floor(Math.random() * (1000000000000 - 0 + 1)) + 0
              }
              id={e.url}
              title={e.name}
              image={e.image}
              price={e.price}
              rating={Math.floor(e.stars)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Search;
