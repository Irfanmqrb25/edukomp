import { redirect } from "next/navigation";

import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "../(main)/(landing-page)/_components/navbar";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center justify-center px-4">
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
