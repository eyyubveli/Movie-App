import React from 'react';
import { PiHeartStraight, PiHeartStraightFill } from "react-icons/pi";

const FavoriteIcon = ({ isFavorite, onToggle }) => {
    return isFavorite ? (
        <PiHeartStraightFill
            className="heart"
            size={35}
            color="#ff0000"
            onClick={(e) => {
                e.stopPropagation();
                onToggle(e);
            }}
        />
    ) : (
        <PiHeartStraight
            className="heart"
            size={35}
            color="#fff"
            onClick={(e) => {
                e.stopPropagation();
                onToggle(e);
            }}
        />
    );
};

export default FavoriteIcon;