import { useState } from "react";
import styled from "styled-components";


interface ListItemProps{
  active: boolean;
}


interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


const List = styled.ul`
list-style: none;
padding: 0;
`;


const ListItem = styled.li<ListItemProps>`
background: ${props => props.active ? 'blue' : 'none'};
padding: 5px 0;
`;


function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, onSelect] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h1>No items found</h1>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index}
            key={item}
            onClick={() => {
              onSelectItem(item);
              onSelect(index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
