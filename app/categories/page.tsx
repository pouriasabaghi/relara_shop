import CategoriesAccordionList from "@/components/categories/CategoriesAccordionList";

async function Categories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/categories`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  const categories = await response.json();

  return (
    <div>
      <CategoriesAccordionList className="px-4" categories={categories} />
    </div>
  );
}

export default Categories;
