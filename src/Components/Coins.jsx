import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { server } from "../main";
import { HStack, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";
import FetchingErr from "./FetchingErr";
import { Link } from "react-router-dom";

const Coins = () => {
  document.title = "CryptoApp | Coins";
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const btns = new Array(129).fill(1);

  const changePage = (pageNo) => {
    setPage(pageNo);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        let { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoinsData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <FetchingErr message={"Error While fetching Coins"} />;

  return (
    <>
      <HStack
        gap="4"
        m="4"
        wrap="wrap"
        justifyContent="space-around"
        maxW="container.xl"
        mx="auto"
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {coinsData.map((coin) => (
              <CoinCard key={coin.id} coinsData={coin} currency={currency} />
            ))}
          </>
        )}
      </HStack>
      <HStack
        w="full"
        overflowX="auto"
        px="8"
        py="4"
        maxW="container.xl"
        mx="auto"
      >
        {btns.map((btn, index) => {
          return (
            <Button
              key={index + 1}
              bgColor="blackAlpha.900"
              p="2"
              color="white"
              onClick={() => {
                changePage(index + 1);
              }}
            >
              {index + 1}
            </Button>
          );
        })}
      </HStack>
    </>
  );
};

export default Coins;

const CoinCard = ({ coinsData, currency }) => {
  const { image, symbol, name, id, current_price } = coinsData;
  let Currencyformat = new Intl.NumberFormat("en-in", {
    style: "currency",
    currency: currency,
  });
  let price = Currencyformat.format(current_price);
  return (
    <>
      <Link to={`/coin/${id}`}>
        <VStack
          bgColor="gray.200"
          w="52"
          py="4"
          flexGrow={["1", "initial"]}
          borderRadius="10"
          _dark={{ bgColor: "gray.700" }}
          transition="all 0.1s ease-out"
          _hover={{ transform: "scale(1.1)" }}
        >
          <Image
            src={image}
            alt="coin image"
            w="16"
            h="16"
            objectFit="contain"
          />
          <Heading size="md" noOfLines={1}>
            {symbol}
          </Heading>
          <Text size="md" noOfLines={1}>
            {name}
          </Text>
          <Text size="md" noOfLines={1}>
            {price ? `${price}` : "N/A"}
          </Text>
        </VStack>
      </Link>
    </>
  );
};
