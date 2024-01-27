import React from 'react'
import { Link } from "react-router-dom";
import {Box,Button} from "@chakra-ui/react";
import { FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
const Stores = ({store_id, url}) => {
  return (
    <>
      <Box>
                {store_id === 3 ? (
                  <Link to={url} target="_blank">
                    <Button>
                      playstation <FaPlaystation />
                    </Button>
                  </Link>
                ) : null}

                {store_id === 11 ? (
                  <Link to={url} target="_blank">
                    <Button>
                      Epic Games <SiEpicgames />
                    </Button>
                  </Link>
                ) : null}

                {store_id === 1 ? (
                  <Link to={url} target="_blank">
                    <Button>
                      Steam <FaSteam />
                    </Button>
                  </Link>
                ) : null}

                {store_id === 2 ? (
                  <Link to={url} target="_blank">
                    <Button>
                      xbox <FaXbox />
                    </Button>
                  </Link>
                ) : null}
              </Box>
    </>
  )
}

export default Stores
