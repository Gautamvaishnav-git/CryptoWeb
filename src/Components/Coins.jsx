import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import { server } from "../main";
import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  useEffect(() => {
    const fetchCoins = async () => {
      let { data } = await axios.get(`${server}/coins/markets?vs_currency=inr`);
      setCoinsData(data);
      setLoading(false);
    };
    fetchCoins();
  }, []);

  return (
    <HStack gap="4" m="4" wrap="wrap">
      {loading ? (
        <Loader />
      ) : (
        <>
          {coinsData.map((coin) => (
            <CoinCard key={coin.id} coinsData={coin} />
          ))}
        </>
      )}
    </HStack>
  );
};

export default Coins;

const CoinCard = ({ coinsData }) => {
  const { image, symbol, name } = coinsData;
  return (
    <>
      <VStack
        bgColor="gray.200"
        w="52"
        py="4"
        borderRadius="10"
        _dark={{ bgColor: "gray.700" }}
        margin="0 !important"
        flexGrow="1"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Image src={image} alt="coin image" w="20" h="20" objectFit="contain" />
        <Heading size="md" noOfLines={1}>
          {symbol}
        </Heading>
        <Text size="md" noOfLines={1}>
          {name}
        </Text>
      </VStack>
    </>
  );
};
