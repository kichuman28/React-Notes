import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h1>No items found</h1>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item) => (
          <li
            className={styles.listGroupItem}
            key={item}
            onClick={() => onSelectItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
