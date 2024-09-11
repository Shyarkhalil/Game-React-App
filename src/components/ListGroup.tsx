import { nanoid } from 'nanoid';
import React from 'react';
function ListGroup() {
  const items = ['New York', 'Tokyo', 'Paris', 'Sydney', 'Cairo', 'Toronto'];
  type listItemClickEvent = React.MouseEvent<HTMLLIElement>;
  const handelClick = (event: listItemClickEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <h1>No items found</h1>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={nanoid()} className="list-group-item" onClick={handelClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
