import IconCheckFill from "../../../../hero-section-list/src/components/icons/icon-check-fill";

interface ListItemType {
  content: string;
}

const ListItem = ({ item }: { item: ListItemType }) => {
  return (
    <li>
      <IconCheckFill />
      <span>{item.content}</span>
    </li>
  );
}


const ListComponent = ({ items }: { items: ListItemType[] }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default ListComponent;