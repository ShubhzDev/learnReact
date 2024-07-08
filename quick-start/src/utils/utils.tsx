import React from "react";
import People from "../interfaces/People"

const getImageUrl:React.FC<People> = ({person}) => {
    return(
        'https://i.imgur.com/' +
        people.imageId +
        's.jpg'
    )
}

export default getImageUrl;