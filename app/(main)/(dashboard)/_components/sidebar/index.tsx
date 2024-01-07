import Menu from "./menu";

const DashboardSidebar = async () => {
  return (
    <aside className="fixed left-0 flex-col w-64 h-full bg-background border-r z-50 px-6 py-6 gap-4 hidden lg:flex">
      <h5 className="uppercase font-semibold text-muted-foreground">
        Main Menu
      </h5>
      <Menu />
    </aside>
  );
};

export default DashboardSidebar;
