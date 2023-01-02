import { Button, HStack, IconButton, Input } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../main";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import FetchingErr from "./FetchingErr";

const Exchanges = () => {
  document.title = "CryptoApp | Exchanges";
  const [exchangesData, setExchangesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        let { data } = await axios.get(`${server}/exchanges`);
        setExchangesData(await data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <FetchingErr message={"Error while fetching Exchanges"} />;

  return (
    <>
      <HStack
        wrap="wrap"
        maxW="container.xl"
        gap="4"
        mx="auto"
        justifyContent="space-evenly"
        px="2"
        py="4"
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {exchangesData &&
              exchangesData.map((exchange) => (
                <ExchangeCard key={exchange.id} exchangesData={exchange} />
              ))}
          </>
        )}
      </HStack>
    </>
  );
};

export default Exchanges;
