import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Error from './Error';
import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';

const GameDetails = () => {
  const [game, setGame] = useState([]);
  const [gameScreenshots, setGameScreenshots] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams(); // Extracting id parameter from the URL

  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  useEffect(() => {
    const fetchGameData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
        const gameData = res.data;
        setGame([gameData]);

        const screenshots = await axios.get(`${URL}games/${id}/screenshots?key=${API_KEY}`);
        setGameScreenshots(screenshots.data.results);  // Corrected: use screenshots.data.results
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

  // Render your game details here using the 'game' state

  return (
    <Box bgColor={'black'} color={'white'} w={'100vw'} minH={'90vh'}>
      {
        game.map((item, index) => (
          <Box h={'100vh'} key={index} >
            <VStack>
              <Heading>{item.name}</Heading>
              <p>{item.description_raw}</p>
              <p>{item.released}</p>
            </VStack>
            <HStack flexWrap={'wrap'}>
              {
                item.tags.map((i) => (
                  <Text>
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
          </Box>
        ))
      }
    </Box>
  );
};

export default GameDetails;
// bgImage={item.background_image} bgPosition={'center'} bgRepeat={'no-repeat'} bgSize={'cover'}