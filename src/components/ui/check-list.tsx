import { cn } from "@/lib/utils";

import IconCheckFill from "../icons/icon-check-fill";


export interface CheckListItemProps {
  content: string;
  className?: string;
}

export const CheckListItem: React.FC<CheckListItemProps> = ({
  content,
  className,
}) => {
  return (
    <li className={cn("flex gap-3", className)}>
      <div className="flex-shrink-0 flex items-center justify-center">
        <IconCheckFill />
      </div>
      <span className="text-neutral-600 ">{content}</span>
    </li>
  );
};

export interface CheckListProps {
  items: CheckListItemProps[];
  className?: string;
}

export const CheckList: React.FC<CheckListProps> = ({
  items,
  className,
}) => {
  return (
    <ul className={cn("space-y-5", className)}>
      {items.map((item, index) => (
        <CheckListItem
          key={index}
          content={item.content}
          className={item.className}
        />
      ))}
    </ul>
  );
};