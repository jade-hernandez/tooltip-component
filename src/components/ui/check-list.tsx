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
    <li className={cn("flex items-start gap-3", className)}>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
        <IconCheckFill />
      </div>
      <span className="text-neutral-700">{content}</span>
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
    <ul className={cn("space-y-4", className)}>
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