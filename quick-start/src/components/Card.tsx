interface Person{
    name : string,
    imageId : string,
}

interface AvatarProps{
    size : number,
    person : Person,
}

interface CardProps {
    children: React.ReactNode;
  }

export default function Profile(){
    const person : Person = {
        name : "ABCD",
        imageId : "https://i.imgur.com/yXOvdOSs.jpg",
    }

    return(
        <Card>
            <Avatar size={100} person={person}/>
        </Card>
    )
}

const Avatar:React.FC<AvatarProps> = ({size,person}) => {
    return(
        <img className="avatar" src={person.imageId} alt={person.name} width={size} height={size}/>
    )
}

const Card : React.FC<CardProps> = ({children}) => {
    return(
        <div className="card">
            {children}
        </div>
    )
}

