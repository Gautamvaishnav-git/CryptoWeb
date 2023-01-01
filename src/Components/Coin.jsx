import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";

const Coin = () => {
  const [coinsData, setCoinData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      let { data } = await axios.get(`${server}/coins/${params.id}`);
      setCoinData(data);
      console.log(coinsData)
    };
    fetchCoin();
  },[]);

  return <div>Coin {params.id} </div>;
};

export default Coin;
