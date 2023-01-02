import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import {
  Container,
  Image,
  Heading,
  RadioGroup,
  Radio,
  VStack,
  Text,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  HStack,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";

import FetchingErr from "./FetchingErr";
import Loader from "./Loader";
import Chart from "./Chart";

const CoinDetail = () => {
  const [coinsData, setCoinData] = useState({});
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [loading, setLoading] = useState(true);
  const [chartArr, setChartArr] = useState([]);
  const [days, setDays] = useState("24h");
  let daysBTN = ["24h", "7d", "14d", "30d", "60d", "200d", "365d", "max"];
  const params = useParams();
  document.title = `CryptoApp | Coins | ${params.id}`;

  const Currencyformat = new Intl.NumberFormat("en-in", {
    style: "currency",
    currency: currency,
  });

  const switchChartStatics = (days) => {
    setDays(days);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        let { data } = await axios.get(
          `${server}/coins/${params.id}?vs_currency=${currency}`
        );

        let { data: ChartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setChartArr(await ChartData.prices);
        setCoinData(await data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error)
    return <FetchingErr message={"Error while Fecthing coin information"} />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxW="container.xl" pt="4">
          <Box w="full">
            <Chart arr={chartArr} currency={currency} days={days} />
          </Box>

          <HStack px={["1", "4"]} py="4" w="full" wrap="wrap" gap={["1", "2"]}>
            {daysBTN.map((btn) => (
              <Button
                key={btn}
                flexGrow={["1", "0"]}
                m="0 !important"
                onClick={(e) => {
                  switchChartStatics(btn);
                }}
              >
                {btn}
              </Button>
            ))}
          </HStack>

          <RadioGroup value={currency} onChange={setCurrency} my="4">
            <Radio value="inr" px={["1", "2"]} defaultChecked>
              INR
            </Radio>
            <Radio value="usd" px={["1", "2"]}>
              USD
            </Radio>
            <Radio value="eur" px={["1", "2"]}>
              EURO
            </Radio>
            <Radio value="jpy" px={["1", "2"]}>
              YEN
            </Radio>
          </RadioGroup>

          <VStack spacing="4" px={["10px", "8"]} py="8" alignItems="flex-start">
            <Text
              fontSize="sm"
              alignSelf="center"
              fontStyle="italic"
              opacity="0.7"
            >
              -- Last Updated{" "}
              {new Date(coinsData.last_updated).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
              })}{" "}
              --
            </Text>
            <Image src={coinsData.image.large} w="20" h="20" />
            <Stat>
              <StatLabel> {coinsData.name} </StatLabel>
              {/* {current price in the market } */}
              <StatNumber>
                {Currencyformat.format(
                  coinsData.market_data.current_price[`${currency}`]
                )}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coinsData.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coinsData.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              fontSize="xl"
              bgColor="black"
              color="white"
              _dark={{ bgColor: "white", color: "black" }}
            >
              #{coinsData.market_cap_rank}
            </Badge>
            <CustomBar
              Currencyformat={Currencyformat}
              low={coinsData.market_data.low_24h[`${currency}`]}
              high={coinsData.market_data.high_24h[`${currency}`]}
            />
            <Box py="8" w="full">
              <Heading pb="4" fontSize="2xl">
                Description
              </Heading>
              <Text>{coinsData.description.en}</Text>
            </Box>
            <Box w="full" experimental_spaceY="4" py="8">
              <Heading fontSize="2xl"> Market Data</Heading>
              <Item
                title={"max supply"}
                value={new Intl.NumberFormat().format(
                  coinsData.market_data["max_supply"]
                )}
              />
              <Item
                title={"circulating supply"}
                value={new Intl.NumberFormat().format(
                  coinsData.market_data["circulating_supply"]
                )}
              />
              <Item
                title={"Market Capital"}
                value={Currencyformat.format(
                  coinsData.market_data.market_cap[`${currency}`]
                )}
              />
              <Item
                title={"All time low"}
                value={Currencyformat.format(
                  coinsData.market_data.atl[`${currency}`]
                )}
              />
              <Item
                title={"All time low"}
                value={Currencyformat.format(
                  coinsData.market_data.ath[`${currency}`]
                )}
              />
              <Item
                title={"public interest score"}
                value={coinsData.public_interest_score}
              />
            </Box>{" "}
            <Box w="full" py="8" experimental_spaceY="4">
              <Heading fontSize="2xl"> Media Links</Heading>
              <MediaItem
                title={"homepage"}
                link={coinsData.links.homepage[0]}
              />
              <MediaItem
                title={"announcement"}
                link={coinsData.links.announcement_url[0]}
              />
              <MediaItem
                title={"blockchain site"}
                link={coinsData.links.blockchain_site[0]}
              />
              <Item
                title={"facebook username"}
                value={coinsData.links.facebook_username}
              />
              <Item
                title={"twitter screen name"}
                value={coinsData.links.twitter_screen_name}
              />
              <MediaItem
                title={"official forum url"}
                link={coinsData.links.official_forum_url[0]}
              />
              <MediaItem
                title={"github repo url"}
                link={coinsData.links.repos_url.github}
              />
              <MediaItem
                title={"bitbucket repo url"}
                link={coinsData.links.repos_url.bitbucket}
              />
            </Box>
            <Box w="full" experimental_spaceY="4" py="8">
              <Heading fontSize="2xl">Community Data</Heading>
              <Item
                title={"facebook likes"}
                value={new Intl.NumberFormat().format(
                  coinsData.community_data["facebook_likes"]
                )}
              />
              <Item
                title={"twitter followers"}
                value={new Intl.NumberFormat().format(
                  coinsData.community_data["twitter_followers"]
                )}
              />
              <Item
                title={"reddit subscribers"}
                value={new Intl.NumberFormat().format(
                  coinsData.community_data["reddit_subscribers"]
                )}
              />
            </Box>
          </VStack>
        </Container>
      )}
    </>
  );
};

export default CoinDetail;

const Item = ({ title, value = "N/A" }) => {
  return (
    <HStack
      w="full"
      justifyContent={["flex-start", "space-between"]}
      alignItems={["flex-start", "center"]}
      fontFamily="Josefin Sans"
      borderBottom="1px"
      borderBottomColor="blackAlpha.100"
      _dark={{ borderBottomColor: "whiteAlpha.100" }}
      flexDirection={["column", "row"]}
    >
      <Text fontSize="md" textTransform="capitalize">
        {title}
      </Text>
      <Text fontSize="md" textTransform="capitalize" m="0">
        {value === null ? "N/A" : value}
      </Text>
    </HStack>
  );
};

const MediaItem = ({ title, link }) => {
  return (
    <HStack
      w="full"
      justifyContent={["flex-start", "space-between"]}
      alignItems={["flex-start", "center"]}
      fontFamily="Josefin Sans"
      borderBottom="1px"
      borderBottomColor="blackAlpha.100"
      _dark={{ borderBottomColor: "whiteAlpha.100" }}
      flexDirection={["column", "row"]}
    >
      <Text fontSize="md" textTransform="capitalize">
        {title}
      </Text>
      <Link
        fontSize="md"
        href={link}
        fontFamily="monospace"
        target="blank"
        wordBreak={"break-all"}
      >
        {link === null ? "N/A" : link}
      </Link>
    </HStack>
  );
};

const CustomBar = ({ low, high, Currencyformat }) => {
  return (
    <VStack w="full">
      <Progress value={50} colorScheme="teal" w="full" />

      <HStack w="full" justifyContent="space-between">
        <Badge children={Currencyformat.format(low)} colorScheme="red" />
        <Text fontSize="sm"> 24h Range</Text>
        <Badge children={Currencyformat.format(high)} colorScheme="green" />
      </HStack>
    </VStack>
  );
};
