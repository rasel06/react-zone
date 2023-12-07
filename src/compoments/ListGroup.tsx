import { MouseEvent, useState } from "react";

// {items:[], heading:string}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   cities = [];

  //let selectedCityIndex = -1;
  const [selectedCityIndex, setSelectedCityIndex] = useState(-1);

  //   Event Handler
  const handleClick = (event: MouseEvent, city?: String, index?: any) => {
    setSelectedCityIndex(index);
    // console.log(city, index);
  };

  //   hook
  //   const arr = useState(-1);
  //   arr[0]; // Variable (selectedIndex)
  //   arr[1]; // updater function

  return (
    <div className="col shadow p-3 bg-body-tertiary rounded m-2">
      <h1>{heading}</h1>
      {/* {cities.length === 0 && <p>No Item found</p>} */}
      <ul className="list-group   bg-body-tertiary rounded">
        {items.map((item, index) => (
          <li
            onClick={(e) => {
              onSelectItem(item);
              handleClick(e, item, index);
            }}
            key={item}
            className={
              selectedCityIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
