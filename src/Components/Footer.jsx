import { Box, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";
import Logo from "../assets/Logo.svg";
import { SiInstagram, SiLinkedin, SiYoutube, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <HStack
      w="full"
      px={["2", "4"]}
      mt="8"
      py="4"
      bgColor="gray.700"
      justifyContent={["flex-start", "space-between"]}
      flexDirection={["column", "row"]}
      gap={["0", "4"]}
      _light={{
        color: "white",
      }}
    >
      <Box px="4" py="2">
        <Link
          href="https://gautamvaishnav.netlify.app/"
          target="_blank"
          w="full"
        >
          <Image src={Logo} w="20" h="20" objectFit="contain" />
        </Link>
      </Box>
      <Box w={["full", "70%"]} px={["4", "8"]}>
        <Heading fontSize="2xl" textAlign={["left", "right"]}>
          Let's Connect!
        </Heading>

        <VStack w="full" alignItems={["flex-start", "flex-end"]} py="2" gap="2">
          <Link
            href="https://www.linkedin.com/in/gautamvaishnav/"
            target="_blank"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <SiLinkedin /> Linkedin
          </Link>
          <Link
            href="https://www.instagram.com/gautam_vaishnav_0234/"
            target="_blank"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <SiInstagram /> Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@fornext_GV"
            target="_blank"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <SiYoutube /> Youtube
          </Link>
          <Link
            href="https://github.com/Gautamvaishnav-git"
            target="_blank"
            display="flex"
            alignItems="center"
            gap="2"
          >
            <SiGithub /> Github
          </Link>
        </VStack>
      </Box>
    </HStack>
  );
};
export default Footer;
