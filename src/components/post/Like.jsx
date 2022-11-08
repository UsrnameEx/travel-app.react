import React, {useEffect, useState} from 'react';
import {Button, Icon} from "framework7-react";

const Like = ({isLiked, callback, stopPropagation}) => {
    const [isLikedRef, setLiked] = useState(false);
    let icon = '';

    useEffect(() => {
        setLiked(isLiked);
    }, []);

    const handleClick = (e) => {
        (stopPropagation) ? e.stopPropagation() : {};
        (callback) ? callback() : {};
        (isLikedRef) ? setLiked(false) : setLiked(true);
    };

    (isLikedRef) ? icon = 'heart_fill' : icon = 'heart';

    return (
        <div>
            <Button className='favoriteButton' onClick={handleClick} color='red'><Icon f7={icon}/></Button>
        </div>
    );
};

export default Like;