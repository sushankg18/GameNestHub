import React from 'react'
import { data } from "../data.js";

const Main = () => {
  return (
    <div>
      {data.map((item) => (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img width={"200px"} src={item.images.poster} />
          <h1>{item.title}</h1>
          <a href={item.download_links.torrent}>
            <button>download torrent </button>
          </a>
          <a href={item.download_links.directly}>
            <button>download directly</button>
          </a>

          {/* HERE THE DESCRIPTION SHOWS */}
          {item.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}

          <div className="screenshots">
            {item.screenshots.map((image, key) => (
              <img width={"200px"} src={image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Main
