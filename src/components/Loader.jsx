import { Box, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box w={'full'} height={'88vh'} display={'flex'} gap={'1rem'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <span class="loader"></span>
    </Box>
  );
};

export default Loader;
