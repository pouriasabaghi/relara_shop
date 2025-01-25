import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CategoriesListProps = {
  categories: {
    id: number;
    name: string;
    parent?: number;
    children: {
      id: number;
      name: string;
      parent?: number;
    }[];
  }[];
  className?: string;
};

function CategoriesAccordionList({
  categories,
  className,
}: CategoriesListProps) {
  return (
    <Accordion className={className} type="single" collapsible>
      {categories.map((category) => (
        <AccordionItem
          className="mb-4 rounded-lg border-none bg-gray-900/65 px-4"
          key={category.id}
          value={`category-${category.id}`}
        >
          {category.children.length !== 0 && (
            <AccordionTrigger className="text-lg font-bold text-white hover:no-underline">
              {category.name}
            </AccordionTrigger>
          )}

          <AccordionContent className="ps-2">
            {category.children?.map((childCat) => (
              <Link
                href={`categories/${childCat.id}`}
                key={childCat.id}
                className="mb-2 flex items-center gap-x-2"
              >
                <span className="text-base text-white">{childCat.name}</span>
                <div className="h-[1px] w-full [background:linear-gradient(270deg,rgba(0,0,0,0)_17%,rgba(255,255,255,0.454)_62%,rgba(255,255,255,1)_100%)]"></div>
              </Link>
            ))}

            <Link
              className="text-base text-white"
              href={`categories/${category.id}`}
            >
              See All Product{" "}
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CategoriesAccordionList;
