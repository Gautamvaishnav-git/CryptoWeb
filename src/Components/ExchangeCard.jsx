import { VStack, Image, Text, Heading, Link } from "@chakra-ui/react";

const ExchangeCard = ({ exchangesData }) => {
  const { image, url, name, trust_score_rank = "no avaliable" } = exchangesData;
  return (
    <Link
      href={url}
      rel="noreffer"
      target="blank"
      m="0"
      w={["full", "52"]}
      flexGrow={["1", "inherit"]}
      _hover={{ transform: "scale(1.05)" }}
    >
      <VStack
        bg="gray.200"
        _dark={{ bg: "gray.700" }}
        px="2"
        py="4"
        boxShadow="lg"
        w="full"
        borderRadius="10"
        transition="all 0.2s ease"
      >
        <Image src={image} />
        <Heading fontSize="20"> {trust_score_rank} </Heading>
        <Text noOfLines={1}> {name} </Text>
      </VStack>
    </Link>
  );
};

export default ExchangeCard;
