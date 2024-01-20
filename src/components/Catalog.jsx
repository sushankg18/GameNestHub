import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Text, Button, Image } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import data from '../data'
import { Link } from 'react-router-dom';

const Catalog = () => {
    return (
        <Menu>
            <MenuButton border={'none'} padding={'.2rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "white", color: "#9a67ff" }} as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                Game Catalog
            </MenuButton>
            <MenuList zIndex={'9'}>
                {
                    data.map((item, index) => (
                        <Link key={index} to={`/catalog/${item.title}`}>
                            <MenuItem minH='48px' padding={'.1rem .8rem'} cursor={'pointer'}>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src={item.images.poster}
                                    alt='Fluffybuns the destroyer'
                                    mr='12px'
                                />
                                <Text color={'black'} fontWeight={'bold'}>{item.title}</Text>
                            </MenuItem>
                        </Link>
                    ))}

            </MenuList>
        </Menu>
    )
}

export default Catalog
