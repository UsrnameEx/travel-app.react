import React, {useEffect, useState} from 'react';
import {Button, Icon} from "framework7-react";

const FavoriteBookmark = ({isFavorite, callback, stopPropagation}) => {
    const [isFavoriteRef, setFavorite] = useState(false);
    let icon = '';

    useEffect(() => {
        setFavorite(isFavorite);
    }, []);

    const handleClick = (e) => {
        (stopPropagation) ? e.stopPropagation() : {};
        (callback) ? callback() : {};
        (isFavoriteRef) ? setFavorite(false) : setFavorite(true);
    }

    (isFavoriteRef) ? icon = 'bookmark_fill' : icon = 'bookmark';

    return (
        <div>
            <Button onClick={handleClick} className='favoriteButton' color='yellow'><Icon f7={icon}/></Button>
        </div>
    );
};

export default FavoriteBookmark;