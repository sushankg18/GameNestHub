import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import Stores from "../AboutGameDetails/Stores";
import DeveloperTeam from "../AboutGameDetails/DeveloperTeam";
import GameSeries from "../AboutGameDetails/GameSeries";
import Screenshots from "../AboutGameDetails/Screenshots";

const GameDetails = () => {
  const [game, setGame] = useState([]);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [developTeam, setDevelopTeam] = useState([]);
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
        const screenshots = await axios.get(
          `${URL}games/${id}/screenshots?key=${API_KEY}`
        );
        const development_team = await axios.get(
          `${URL}games/${id}/development-team?key=${API_KEY}`
        );
        const game_series = await axios.get(
          `${URL}games/${id}/game-series?key=${API_KEY}`
        );
        const platforms = await axios.get(
          `${URL}games/${id}/stores?key=${API_KEY}`
        );

        setLoading(false);
        setGame([res.data]);
        setGameScreenshots(screenshots.data.results);
        setDevelopTeam(development_team.data.results);
        setGameSeries(game_series.data.results);
        setPlatform(platforms.data.results);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id]);

  if (error) {
    return <Error message={"Error while fetching Game data 😭"} />;
  }

  return (
    <Box color={"white"} w={"100vw"} minH={"90vh"} position={"relative"} p={'2rem 3rem'}>
      {loading ? (
        <Loader />
      ) : (
        game.map((item, index) => (
          <>
            <Box
              position={"fixed"}
              top={"0"}
              left={'0'}
              zIndex={"-1"}
              w="100%"
              h="100%"
              background={`radial-gradient(ellipse at center, rgba(0,0,0,.4) 0%, rgba(0,0,0,0.9) 100%), url(${item.background_image})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />
            <VStack alignItems={"flex-start"}>
              <Heading color={"#9A67FF"}>{item.name}</Heading>
              <p style={{ width: "50%" }}>{item.description_raw}</p>
              <p>{item.released}</p>
            </VStack>
            <HStack flexWrap={"wrap"} width={"50%"} gap={".2rem"}>
              {item.tags.map((i) => (
                <Text textDecor={"underline"} cursor={"pointer"}>
                  {i.name}
                </Text>
              ))}
            </HStack>

            <HStack>
              {gameScreenshots.map((screenshot, index) => (
               <Screenshots screenshot={screenshot.image} index={index}/>
              ))}
            </HStack>

            {platform.map((i) => (
              <Stores store_id={i.store_id} url={i.url}/>
            ))}
            <Link to={item.website} target="_blank" rel="">
              <Heading>website</Heading>
            </Link>
            <Box sx={style}>
              <HStack w={"fit-content"} gap={"1.5rem"}>
                {developTeam.map((i) => (
                  <DeveloperTeam bgIMG={i.image_background} photo={i.image} name={i.name} />
                ))}
              </HStack>
            </Box>


            <HStack>
              {gameSeries.map((i) => (
               <GameSeries bgIMG={i.background_image} name={i.name} />
              ))}
            </HStack>
          </>
        ))
      )}
    </Box>
  );
};


const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    height: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#9A67FF",
    borderRadius: "10px",
    cursor: "pointer",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::webkit-scrollbar-thumb:hover": {
    backgroundColor: "black",
  },
};

const style = {
  width: "88vw",
  height: "fit-content",
  padding: "1rem 0",
  overflowX: "scroll",
  scrollBehavior: "smooth",
  ...scrollbarStyles,
};

export default GameDetails;
