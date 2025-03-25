import { cn } from "@/lib/utils";

import IconCheckFill from "../icons/icon-check-fill";

export interface ICheckListItemProps {
  content: string;
  className?: string;
}

export const CheckListItem = ({ content, className }: ICheckListItemProps) => {
  return (
    <li className={cn("flex gap-3", className)}>
      <div className='flex flex-shrink-0 items-center justify-center'>
        <IconCheckFill />
      </div>
      <span className='text-neutral-600'>{content}</span>
    </li>
  );
};

export interface ICheckListProps {
  items: ICheckListItemProps[];
  className?: string;
}

export const CheckList = ({ items, className }: ICheckListProps) => {
  const isLastItem = items.length - 1;
  return (
    <ul className={cn("space-y-5", className)}>
      {items.map((item, index) => (
        <CheckListItem
          key={index}
          content={item.content}
          className={cn(item.className, index === isLastItem ? "pb-5" : "")}
        />
      ))}
    </ul>
  );
};
