import {useEffect, useState} from "react";
import {requestServ} from "../../services";
import {Album} from "../Album/Album";

import css from "./Albums.module.css";

const Albums = () => {

   const [albums, setAlbums] = useState([]);

   useEffect( ()=> {
       requestServ.album().then(({data}) => setAlbums([...data]))
   })

    return (
        <div className={css.Albums}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};