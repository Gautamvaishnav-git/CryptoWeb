import { VStack, Image, Text, Heading } from "@chakra-ui/react";

const ExchangeCard = ({ exchangesData }) => {
  const { image, url, name, trust_score_rank = "no avaliable" } = exchangesData;
  return (
    <a href={url} rel="noreffer" target="blank" style={{ margin: "0" }}>
      <VStack
        bg="gray.200"
        _dark={{ bg: "gray.700" }}
        px="2"
        py="4"
        boxShadow="lg"
        minW="52"
        borderRadius="10"
        transition="all 0.2s ease"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image src={image} />
        <Heading fontSize="20"> {trust_score_rank} </Heading>
        <Text noOfLines={1}> {name} </Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
