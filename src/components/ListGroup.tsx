import { nanoid } from 'nanoid';
import { useState } from 'react';
//Adding the props interface for the application
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h1>No items found</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={nanoid()}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
