import { Alert, AlertIcon, Image } from "@chakra-ui/react";
import ErrorPage from "../assets/ErrorPage.png";

const FetchingErr = ({ message }) => {
  return (
    <>
      <Alert status="error" maxW="container.xl">
        <AlertIcon />
        {message}
      </Alert>
      <Image src={ErrorPage} mx="auto" />
    </>
  );
};

export default FetchingErr;
