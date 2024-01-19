import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HStack, Button, Box, Heading,VStack, Image, Text, Center } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';

const Home = () => {
  const URL = "https://api.rawg.io/apis/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const changePage = (page) => {
    setPage(page);
  };

  const btns = new Array(10).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${URL}games?page_size=30&page=${page}&key=${API_KEY}`);
        setData(response.data.results);
        console.log(response.data.results)
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (error) {
    return <Error />;
  }

  return (
    <Box>
      <Center margin={'1rem'}>
        <Heading fontSize={'2rem'}>POPULAR</Heading>
      </Center>

      <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={'1rem'} justifyContent={'center'}>
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Box key={index} bgColor={'#202020'} borderRadius={'.5rem'} display={'flex'} flexDir={'column'} gap={'.5rem'} overflow={'hidden'} w={['100%','17rem']} height={'17rem'} >
              <Box w={'100%'} height={'65%'} cursor={'pointer'}  overflow={'hidden'} >
                <Image width={'100%'} h={'100%'} src={item.background_image} alt={item.name}transition={'.2s all ease-in-out'} _hover={{ transform: 'scale(1.2)' }}/>
              </Box>
              <VStack alignItems={'flex-start'} padding={'.3rem 1rem'}>
                <Text fontWeight={'bold'} cursor={'pointer'} noOfLines={'1'}>{item.name}</Text>
                <Text>Released: {item.released}</Text>
                <Text>Genre : {item.genres[0].name} </Text>
              </VStack>
            </Box>
          ))
        )}
      </Box>

      <HStack overflowX={'auto'} w={'full'} className="buttons-div" padding={'5px'}>
        {btns.map((_, index) => (
          <Button
            key={index}
            onClick={() => changePage(index + 1)}
            bgColor={'white'}
            color={'black'}
            border={'none'}
            cursor={'pointer'}
            borderRadius={'100%'}
            fontWeight={'bold'}
            width={'2rem'}
            height={'2rem'}
            _hover={{
              bgColor: '#9A67FF',
              color: '#fff',
            }}
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default Home;
