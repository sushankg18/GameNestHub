import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
const Stores = ({ store_id, url }) => {
  return (
    <>
      {store_id === 3 ? (
        <Link to={url} target="_blank">
          <Button
            border={"none"}
            padding={".4rem 0rem"}
            width={"9rem"}
            bgColor={"#fff"}
            color={"#9a67ff"}
            cursor={"pointer"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            fontFamily={"Titillium Web"}
            fontSize={"1rem"}
            transition={".2s all ease"}
            _hover={{ bgColor: "#9a67ff", color: "white" }}
            rightIcon={<FaPlaystation />}
          >
            Playstation
          </Button>
        </Link>
      ) : null}

      {store_id === 11 ? (
        <Link to={url} target="_blank">
          <Button
            border={"none"}
            padding={".4rem 0rem"}
            width={"9rem"}
            bgColor={"#fff"}
            color={"#9a67ff"}
            cursor={"pointer"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            fontFamily={"Titillium Web"}
            fontSize={"1rem"}
            transition={".2s all ease"}
            _hover={{ bgColor: "#9a67ff", color: "white" }}
            rightIcon={<SiEpicgames />}
          >
            Epic Games
          </Button>
        </Link>
      ) : null}

      {store_id === 1 ? (
        <Link to={url} target="_blank">
          <Button
            border={"none"}
            padding={".4rem 0rem"}
            width={"9rem"}
            bgColor={"#fff"}
            color={"#9a67ff"}
            cursor={"pointer"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            fontFamily={"Titillium Web"}
            fontSize={"1rem"}
            transition={".2s all ease"}
            _hover={{ bgColor: "#9a67ff", color: "white" }}
            rightIcon={<FaSteam />}
          >
            Steam
          </Button>
        </Link>
      ) : null}

      {store_id === 2 ? (
        <Link to={url} target="_blank">
          <Button
            border={"none"}
            padding={".4rem 0rem"}
            width={"9rem"}
            bgColor={"#fff"}
            color={"#9a67ff"}
            cursor={"pointer"}
            borderRadius={"5px"}
            fontWeight={"bold"}
            fontFamily={"Titillium Web"}
            fontSize={"1rem"}
            transition={".2s all ease"}
            _hover={{ bgColor: "#9a67ff", color: "white" }}
            rightIcon={<FaXbox />}
          >
            xbox
          </Button>
        </Link>
      ) : null}
    </>
  );
};

const styling = {
  color: "white",
  backgroundColor: "black",
};
const hoverEffect = {
  backgroundColor: "white",
  color: "black",
};
export default Stores;
