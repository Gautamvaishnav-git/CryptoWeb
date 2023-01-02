import { Spinner, VStack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack transform="scale(2)" my="10" >
      <Spinner />
    </VStack>
  );
};

export default Loader;
