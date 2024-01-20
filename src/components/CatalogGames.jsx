import React from "react";
import { Box } from '@chakra-ui/react'
import data from '../data'
import { useParams } from 'react-router-dom'
import CatalogGameDetails from "./CatalogGameDetails";
import Error from "./Error";

const CatalogGames = () => {
    const params = useParams();
    const selectedGame = data.find(item => item.title === params.id);

    return (
        <Box>
            {selectedGame ? (
                <CatalogGameDetails
                    id={selectedGame.id}
                    title={selectedGame.title}
                    poster={selectedGame.images.poster}
                    bgIMG={selectedGame.images.bg_large}
                    releaseDate={selectedGame.release_date}
                    genre={selectedGame.genre}
                    developer={selectedGame.developer_publisher}
                    platform={selectedGame.platform}
                    multiplayer={selectedGame.multiplayer}
                    version={selectedGame.version}
                    size={selectedGame.size}
                    desc={selectedGame.description}
                    MiniReq={selectedGame.minimum_requirements}
                    RecReq={selectedGame.recommended_requirements}
                    trailer={selectedGame.trailer}
                    screenshots={selectedGame.screenshots}
                    gdrive={selectedGame.download_links.gdrive}
                    mega={selectedGame.download_links.mega}
                    torrent={selectedGame.download_links.torrent}
                    directly={selectedGame.download_links.directly}
                />
            ) : (
                <Error />
            )}
        </Box>
    )
}

export default CatalogGames;
