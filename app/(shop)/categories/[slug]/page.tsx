import ProductCard from "@/components/cards/ProductCard";

type Product = {
  id: number;
  name: string;
  primary_image: {
    sizes: {
      [key: string]: { path: string; url: string };
    };
  };
  price: string;
};

async function CategoryProducts({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );

  const { data: products }: { data: Product[] } = await response.json();

  // console.log(products);

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          slug={product.id}
          name={product.name}
          price={product.price}
          image={product.primary_image?.sizes?.thumbnail?.url}
        />
      ))}
    </div>
  );
}

export default CategoryProducts;
