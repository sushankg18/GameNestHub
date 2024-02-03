import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const DeveloperTeam = ({ bgIMG, name, photo }) => {
  return (
    <HStack>
      <Box
        w={"17rem"}
        position={"relative"}
        h={"17rem"}
        border={"1px solid #18181C"}
        cursor={"pointer"}
        overflow={"hidden"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={'center'}
        gap={'1rem'}
        mr={'1rem'}
      >
        <Box
          position={"absolute"}
          top={"0"}
          w="100%"
          h="100%"
          zIndex={"-1"}
          background={`radial-gradient(ellipse at center, rgba(0,0,0,.5) 0%, rgba(0,0,0,0.9) 100%), url(${bgIMG})`}
          backgroundSize="cover"
          transition={".2s all ease-in-out"}
          backgroundPosition="center"
          _hover={{
            transform: "scale(1.1)",
          }}
        />
        <Box w={"7rem"} h={"7rem"} overflow={"hidden"}>
          {photo ? (
            <Image
              w={"100%"}
              h={"100%"}
              border={"none"}
              borderRadius={"100%"}
              objectFit={"cover"}
              src={photo}
            />
          ) : null}
        </Box>

          <Text
            zIndex={2}
            color="white"
            fontWeight={"bold"}
            fontSize={"1.3rem"}
            userSelect={"none"}
            w={'100%'}
            display={'flex'}
            justifyContent={'center'}
          >
            {name}
          </Text>
      </Box>
    </HStack>
  );
};


export default DeveloperTeam;
