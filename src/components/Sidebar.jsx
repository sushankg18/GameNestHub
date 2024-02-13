import { Box, Flex, HStack, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BiLibrary } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { BsFire } from "react-icons/bs";
import {
  FaStar,
  FaTrophy,
  FaPoll,
  FaCrown,
  FaComment,
  FaUser,
  FaWindows,
  FaXbox,
  FaAppStoreIos,
} from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { GiConsoleController } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi"; // for genre
import { FaHashtag } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { SiLeanpub } from "react-icons/si";
import { FaPlaystation } from "react-icons/fa";
import { TfiAndroid } from "react-icons/tfi";
import { Link } from "react-router-dom";
import profile from '../assets/profile.jpeg';
import { hover } from "@testing-library/user-event/dist/hover";
import { NoteContext } from '../Context/NoteState';

const Sidebar = () => {

  const { LoginStatus } = useContext(NoteContext);

  return (
    <Box display={['none', 'block']} minW={"20%"} bgColor={'transparent'} position={"sticky"} top={"10vh"}
      h={"90vh"}
      overflowY={"auto"}
      color={"white"}
    >
      <VStack
        height={"fit-content"}
        py={"2rem"}
        alignItems={"flex-start"}
        p={"2rem 4rem"}
      >
        <Text fontSize={"larger"} fontWeight={"bold"}>
          <Link to={'/'}>
            HOME
          </Link>
        </Text>
        <Text fontSize={"larger"} fontWeight={"bold"}>
          {
            LoginStatus ? (
              <Link to={'/userprofile'}>
                <Flex gap={'.4rem'}>
                  <Image src={profile} borderRadius={'50%'} w={'2rem'} h={'2rem'} /> SUSHANK
                </Flex>
              </Link>
            )
              : (
                <Link to={'/login'}>
                  <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#fff'} color={'#9a67ff'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "#9a67ff", color: "white" }}>Login</Button></Link>
              )
          }
        </Text>
        <Text fontSize={"larger"} fontWeight={"bold"}>
          FOLLOWINGS
        </Text>
        {/* <Text fontSize={"larger"} display={'flex'} alignItems={'center'} gap={'.7rem'}> <CiGift /> Wishlist</Text>
        <Text fontSize={"larger"} display={'flex'} alignItems={'center'} gap={'.7rem'}> <BiLibrary /> My library</Text>
        <Text fontSize={"larger"} display={'flex'} alignItems={'center'} gap={'.7rem'}> <HiOutlineUsers /> People</Text> */}

        <Text fontSize={"larger"} fontWeight={"bold"}>
          NEW RELEASE
        </Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} > <FaStar /> Last 30 days</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} > <BsFire /> This week</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} > <GiNextButton /> Next week</Text>
        {/* <Text fontSize={"larger"} fontWeight={"bold"}>
          BROWSE BY
        </Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} fontWeight={'bold'}>Platforms</Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} > <FaWindows /> PC</Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} > <FaPlaystation /> Playstation 4</Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} > <FaXbox /> Xbox One</Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} > <FaAppStoreIos /> Ios</Text>
        <Text display={'flex'} cursor={'pointer'} alignItems={'center'} gap={'.7rem'} fontSize={"larger"} > <TfiAndroid /> Android</Text> */}

        <Text fontSize={"larger"} fontWeight={"bold"}>
          BROWSE BY
        </Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} > <MdLocalGroceryStore />  Stores</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} > <FaFolderOpen /> Collections</Text>
        <Link to={'/genre'}>
          <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} ><BiSolidCategory />Genre</Text>
        </Link>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect}><FaUser />Creators</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} ><FaHashtag />Tags</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} >< IoCodeSlash /> Developer</Text>
        <Text fontSize={"larger"} style={stylying} _hover={hoverEffect} ><SiLeanpub />Publisher</Text>
      </VStack>
    </Box>
  );
};


const stylying = {
  display: 'flex',
  alignItems: 'center',
  gap: '.7rem',
  cursor: 'pointer',
}

const hoverEffect = {
  color: "#8C52FF"
}
export default Sidebar;
