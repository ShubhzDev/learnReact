import React from "react";
import styles from './Profile.module.css'

interface User{
    name : string,
    imageUrl: string,
    imageSize:number,
}

const user : User = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export default function Profile() {
    return(
        <>
        <h1>{user.name}</h1>
        <img className={styles.avatar} src={user.imageUrl} alt={`Photo of ${user.name}`} 
        style={{
            width : user.imageSize,
            height : user.imageSize,
        }}
        />
        </>
    )
}