import DashboardNavbar from "./_components/navbar";
import DashboardSidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavbar />
      <div className="flex pt-20 bg-[#F5F7FA] min-h-full dark:bg-[#1e1e1e]">
        <DashboardSidebar />
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
