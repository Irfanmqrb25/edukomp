import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
