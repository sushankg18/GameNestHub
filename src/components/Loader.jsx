import { Box, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box w={'full'} height={'88vh'} display={'flex'} gap={'1rem'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        w={'10rem'}
        height={'10rem'}
        borderRadius={'50%'}
        color="#fff"
        speed="1.3s"
        motion={{
          rotate: [0, 360],
        }}
      />
      <Heading _selection={{bgColor : "yellow", color : "#000"}}>LOADING PLEASE WAIT.......</Heading>
    </Box>
  );
};

export default Loader;
