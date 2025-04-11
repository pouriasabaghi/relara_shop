// import CategoryProducts from "@/components/categories/CategoryProducts";

async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return <p>خطا در دریافت دسته‌بندی‌ها</p>;
  }

  const categories: { slug: string; name: string }[] = await response.json();

  if (categories.length === 0) {
    return <p>دسته‌بندی‌ای یافت نشد.</p>;
  }

  return (
    <div>
      {/* {categories.map((category) => (
        <section key={category.slug} className="mb-10">
          <h2 className="text-xl font-bold mb-4">{category.name}</h2>
          <CategoryProducts slug={category.slug} />
        </section>
      ))} */}
    </div>
  );
}

export default Home;
