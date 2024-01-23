import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HStack, Button, Box, Heading, VStack, Image, Text, Center, Tooltip } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
import { Link } from 'react-router-dom';
import shuffle from 'lodash/shuffle';
import { FaRegHeart } from "react-icons/fa6";
const Home = () => {
  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const changePage = (page) => {
    setPage(page);
  };

  const btns = new Array(15).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try { 
        const response = await axios.get(`${URL}games?page_size=20&page=${page}&key=${API_KEY}`);
        const games = response.data.results;

        const shuffledGames = shuffle(games);

        setData(shuffledGames);

      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, API_KEY]);
  const handleHeartClick = (index) => {
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };
  if (error) {
    return <Error message={'Data went on vacation without leaving a note 😭. '} />;
  }


  return (
    <Box w={'100vw'} bgColor={'#121212'} minH={'90vh'} color={'white'} fontFamily={'Titillium Web'} >
      <Center py={'1.5rem'} >
        <Heading fontFamily={'Titillium Web'} fontSize={'2rem'} _selection={selection} >POPULAR AND TRENDING</Heading>
      </Center>

      <Box display={'flex'} p={"1.5rem 0"} flexWrap={'wrap'} gap={'1rem'} justifyContent={'center'}>
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Link key={index} to={`/games/${item.id}`}>
              <Box cursor={'pointer'} border={'1px solid #6A6869'} key={index} borderRadius={'.5rem'} display={'flex'} flexDir={'column'} gap={'.5rem'} overflow={'hidden'} w={['100%', '20rem']} height={'19rem'} >
                <Box w={'100%'} height={'65%'} cursor={'pointer'} overflow={'hidden'} >
                  <Image width={'100%'} objectFit={'fill'} h={'100%'} userSelect={'none'} src={item.background_image} alt={item.name} transition={'.2s all ease-in-out'} _hover={{ transform: 'scale(1.2)' }} />
                </Box>
                <HStack justifyContent={'space-between'} padding={'.3rem 1rem'}>
                  <VStack alignItems={'flex-start'} >
                    <Text _selection={selection} noOfLines={'1'} fontWeight={'bold'} cursor={'pointer'} fontSize={'1.2rem'} >{item.name}</Text>
                    <Text _selection={selection}>Released: {item.released}</Text>
                    <Text _selection={selection}>Genre : {item.genres[0].name} </Text>
                  </VStack>
                  <HStack alignSelf={'flex-start'} >
                    <Tooltip label='Favourite'>
                      <FaRegHeart
                        onClick={() => handleHeartClick(index)}
                        style={{ cursor: 'pointer', color: clickedItems[index] ? 'pink' : 'white' }}
                        fontSize={'1.3rem'}
                      />
                    </Tooltip>
                  </HStack>
                </HStack>
              </Box>
            </Link>
          ))
        )}
      </Box>

      <HStack overflowX={'auto'} justifyContent={'center'} w={'full'} p={'2rem'} >
        {btns.map((_, index) => (
          <Button
            key={index}
            onClick={() => changePage(index + 1)}
            bgColor={'white'}
            color={'black'}
            border={'none'}
            cursor={'pointer'}
            borderRadius={'.3rem'}
            fontWeight={'bold'}
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


const selection = {
  bgColor: "#9A67FF",
  color: "#fff"
}


// for getting developerteam
// https://api.rawg.io/api/games/3498/development-team?key=b529d03181f044c39b0a7a0722e82612