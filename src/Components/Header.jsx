import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      bgColor="gray.200"
      _dark={{ bgColor: "gray.900" }}
      p="2"
      pos="sticky"
      top="0"
      w="full"
      zIndex="1000"
    >
      <Button variant="unstyled" fontWeight="normal">
        <NavLink to="/"> Home</NavLink>
      </Button>
      <Button variant="unstyled" fontWeight="normal">
        <NavLink to="/coins">Coins</NavLink>
      </Button>
      <Button variant="unstyled" fontWeight="normal">
        <NavLink to="/exchanges">Exchanges</NavLink>
      </Button>
    </HStack>
  );
};

export default Header;
