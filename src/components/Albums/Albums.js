import {useEffect, useState} from "react";
import {requestServ} from "../../services";

const Albums = () => {

   const [albums, setAlbums] = useState([]);

   useEffect( ()=> {
       requestServ.album().then(({data}) => console.log(data))
   })

    return (
        <div>
            Albums
        </div>
    );
};

export {Albums};