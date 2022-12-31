import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      bgColor="gray.200"
      _dark={{ bgColor: "teal.500" }}
      p="2"
      pos="sticky"
      top="0"
      w="full"
      zIndex="1000"
    >
      <Button variant="unstyled" fontWeight="normal">
        <Link to="/"> Home</Link>
      </Button>
      <Button variant="unstyled" fontWeight="normal">
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant="unstyled" fontWeight="normal">
        <Link to="/exchanges">Exchanges</Link>
      </Button>
    </HStack>
  );
};

export default Header;
