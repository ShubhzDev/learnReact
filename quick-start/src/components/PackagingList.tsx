interface ItemProps{
    name : string,
    isPacked : boolean,
}


const Item : React.FC<ItemProps> = ({name,isPacked}) => {
    return(
        <li className="item">
            {name} {isPacked && '✔'}
        </li>
    );
}

const PackagingList : React.FC = () => {
    return(
        <section>
            <ul>
            <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
            </ul>
        </section>
    )
}

export default PackagingList;