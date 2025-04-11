import ProductCard from "@/components/cards/ProductCard";
import Filters from "@/components/products/Filters";
import ProductSidebar from "@/components/products/ProductsSideBar";

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

  return (
    <div className="flex justify-center gap-10">
      {/* Sidebar */}
      <div className="hidden place-items-start lg:col-span-3 lg:block">
        <ProductSidebar />
      </div>

      {/* Product Grid */}
      <div className="place-items-center lg:col-span-9">
        <div className="mb-5 flex h-12 w-full items-center justify-between rounded-md bg-primaryDark px-5 lg:justify-start">
          <Filters>
    
          </Filters>
          <div className="flex gap-x-5 px-5 text-sm text-white hover:cursor-pointer hover:text-gray-300">
            <button>Newest</button>
            <button>Most Popular</button>
            <button>Cheapest</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5">
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
      </div>
    </div>
  );
}

export default CategoryProducts;
