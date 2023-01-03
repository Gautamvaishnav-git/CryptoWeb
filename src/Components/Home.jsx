import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import homePageImage from "../assets/homePageImage.webp";
import homePageImageLight from "../assets/homePageImageLight.webp";
import bitcoin from "../assets/bitcoin.webp";
import coder from "../assets/coder.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  document.title = "CryptoApp by Gautam";
  return (
    <Box>
      <VStack
        backgroundImage={`url(${homePageImageLight})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        backgroundAttachment="fixed"
        w="full"
        h="80vh"
        className="HomeBG"
        justifyContent="center"
        alignItems="center"
        _dark={{ backgroundImage: `url(${homePageImage})` }}
      >
        <Heading
          color="white"
          bgColor="blackAlpha.400"
          fontSize={["md", "6xl"]}
          backdropFilter="blur(10px)"
          _dark={{ bgColor: "whiteAlpha.400" }}
          p="2"
          maxW="container.xl"
          mx="auto"
        >
          A Crypto Application.
        </Heading>
      </VStack>
      <VStack py="16" px={["2", "8"]} w="full" mx="auto" maxW="container.xl">
        <Heading>About This Application</Heading>
        <HStack
          w="full"
          pt="8"
          flexDirection={["column", "row"]}
          gap="4"
          alignItems="flex-start"
        >
          <Box w="full" overflow="hidden" borderRadius="8" boxShadow="xl">
            <Image src={bitcoin} _dark={{ filter: "grayscale(1)" }} />
          </Box>
          <Box w="full">
            <Text>
              We are providing you all the currenies and the exchanges platforms
              data. Here you can see 12800+ coins data. you can see statics. you
              can see 200+ exchange platforms.
            </Text>
            <Heading fontSize="xl" py="4">
              What is Bitcoin ?
            </Heading>
            <Text>
              Bitcoin is the first successful internet money based on
              peer-to-peer technology; whereby no central bank or authority is
              involved in the transaction and production of the Bitcoin
              currency. It was created by an anonymous individual/group under
              the name, Satoshi Nakamoto.
            </Text>

            <Button mt="2" colorScheme="teal" borderRadius="4">
              <Link to="/coin/bitcoin">More About Bitcoin</Link>
            </Button>
          </Box>
        </HStack>
      </VStack>
      <motion.div
        animate={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <VStack py="16" px={["2", "8"]} w="full" mx="auto" maxW="container.xl">
          <Heading>Who I am ? </Heading>
          <HStack
            w="full"
            pt="8"
            flexDirection={["column", "row"]}
            gap="4"
            alignItems="flex-start"
          >
            <Box w="full">
              <Text>
                My profession is front end development. JavaScript is my area of
                expertise. Additionally, I have experience working withReact
                (JavaScript Library),Tailwind (Css Framwork),Chakraui (Component
                Library).
              </Text>
              <Text pt="2">
                Currently I'm looking for a opportunitie, Give me a chance to
                help you to grow your company by developing fast websites with
                better user experience. If you have any query you can contact me
                without and hesitation.
              </Text>

              <Button mt="2" colorScheme="teal" borderRadius="4">
                <a href="https://gautamvaishnav.netlify.app/" target="_blank">
                  Let's Connect
                </a>
              </Button>
            </Box>
            <Box w="full" overflow="hidden" borderRadius="8" boxShadow="xl">
              <Image
                src={coder}
                filter={"hue-rotate(70deg)"}
                _dark={{ filter: "hue-rotate(90deg)" }}
              />
            </Box>
          </HStack>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Home;
