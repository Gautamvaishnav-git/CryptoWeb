import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      p="2"
      zIndex="overlay"
      borderRadius="full"
      pos="fixed"
      right="2"
      top="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
