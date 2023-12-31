import { cn } from "@/lib/utils";

interface TabItemProps {
  label: string;
  isSelected?: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ label, isSelected }) => {
  return (
    <div
      className={cn(
        "px-4 py-3 border-2 border-brand rounded-md text-center cursor-pointer hover:bg-brand hover:text-white",
        isSelected && "text-white bg-brand"
      )}
    >
      {label}
    </div>
  );
};

export default TabItem;
