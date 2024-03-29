import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const GameSeries = ({ name, bgIMG, slug, idx }) => {
  return (
    <HStack key={idx}>
      <Link to={`/games/${slug}`}>
        <Box
          w={'fit-content'}
          h={'fit-content'}
          gap={'1rem'}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
        >
          <Box w={'17rem'} position={'relative'} h={'17rem'}>
            <Box
              position={'absolute'}
              top={'0'}
              w="100%"
              h="100%"
              zIndex={'-1'}
              background={`radial-gradient(ellipse at center, rgba(0,0,0,.3) 0%, rgba(0,0,0,0.6) 100%), url(${bgIMG})`}
              backgroundSize="cover"
              transition={'.2s all ease-in-out'}
              backgroundPosition="center"
              _hover={{
                transform: 'scale(1.1)',
              }}
            />
          </Box>
          <Text noOfLines={'1'} fontWeight={'bold'} fontSize={'large'}>
            {name}
          </Text>
        </Box>
      </Link>
    </HStack>
  );
};

export default GameSeries;
