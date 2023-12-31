import CategoriesCard from "../_components/card/categories-card";
import Wrapper from "../_components/wrapper";

const DahsboardPage = () => {
  const categoriesData = [
    {
      name: "Graphics Design",
      imageUrl: "/categories-illustration-design.svg",
      href: "/",
      className: "bg-[#F18BA0]",
    },
    {
      name: "UI/UX Design",
      imageUrl: "/categories-illustration-uiux.svg",
      href: "/",
      className: "bg-[#FF7170]",
    },
    {
      name: "Business Management",
      imageUrl: "/categories-illustration-business.svg",
      href: "/",
      className: "bg-[#9383EE]",
    },
    {
      name: "Software Development",
      imageUrl: "/categories-illustration-development.svg",
      href: "/",
      className: "bg-[#6299F4]",
    },
    {
      name: "Digital Marketing",
      imageUrl: "/categories-illustration-marketing.svg",
      href: "/",
      className: "bg-[#45CBCA]",
    },
  ];

  return (
    <Wrapper>
      <div className="space-y-8">
        <div className="space-y-4">
          <h5 className="font-semibold text-lg md:text-xl text-muted-foreground">
            Course Categories
          </h5>
          <div className="flex gap-4">
            {categoriesData.map((category) => (
              <CategoriesCard
                key={category.name}
                name={category.name}
                imageUrl={category.imageUrl}
                href={category.href}
                className={category.className}
              />
            ))}
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-lg md:text-xl text-muted-foreground">
            Top Course This Week
          </h5>
        </div>
      </div>
    </Wrapper>
  );
};

export default DahsboardPage;
