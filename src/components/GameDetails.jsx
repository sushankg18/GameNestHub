import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Error from './Error';
import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';

const GameDetails = () => {
  const [game, setGame] = useState([]);
  const [gameScreenshots, setGameScreenshots] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  useEffect(() => {
    const fetchGameData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
        console.log('Game Data:', res.data);

        const screenshots = await axios.get(`${URL}games/${id}/screenshots?key=${API_KEY}`);
        console.log('Screenshots:', screenshots.data.results);
        setLoading(false);

        setGame([res.data]);
        setGameScreenshots(screenshots.data.results);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };


    fetchGameData();
  }, [id]);

  if (error) {
    return <Error message={'Error while fetching Game data 😭'} />;
  }

  return (
    <Box color={'white'} w={'100vw'} minH={'90vh'}>
      {loading ? (<Loader />) : (
        game.map((item, index) => (
          <Box h={'100vh'} key={index} position={'relative'}>
            <Box
              position={'fixed'}
              top={'0'}
              zIndex={'-1'}
              w="100%"
              h="100%"
              background={`radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${item.background_image})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />
            <VStack alignItems={'flex-start'}>
              <Heading color={'#9A67FF'}>{item.name}</Heading>
              <p style={{ width: "50%" }}>{item.description_raw}</p>
              <p >{item.released}</p>
            </VStack>
            <HStack flexWrap={'wrap'} width={'50%'} gap={'.2rem'}>
              {
                item.tags.map((i) => (
                  <Text textDecor={'underline'} cursor={'pointer'}>
                    {i.name}
                  </Text>
                ))
              }
            </HStack>
            <HStack>
              {gameScreenshots.map((screenshot, index) => (
                <Image w={'200px'} key={index} src={screenshot.image} />
              ))}
            </HStack>
            <Link to={item.website} target='_blank' rel=''>
            website
            </Link>
          </Box>

        )
        ))
      }
    </Box>
  );
};

export default GameDetails;
// bgImage={item.background_image} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}

// FOR GAME ACCORDING TO GENRE  
// https://api.rawg.io/api/genres?key=b529d03181f044c39b0a7a0722e82612


// FOR GAME TRAILORS OR MOVIES
// https://api.rawg.io/api/games/3498/movies?key=b529d03181f044c39b0a7a0722e82612


// FOR GETTING THE PUBLISHERS WHO PUBLISHES THE GAMES.
// https://api.rawg.io/api/publishers?key=b529d03181f044c39b0a7a0722e82612