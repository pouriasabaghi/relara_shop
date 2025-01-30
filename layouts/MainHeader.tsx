import Link from "next/link";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";

function MainHeader() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white p-2 shadow-md lg:hidden">
      <ul className="flex items-center justify-around">
        <li>
          <Link href="/" className="flex flex-col items-center gap-1 text-gray-700">
            <AiOutlineHome size={25}/>
            <p className="text-xs font-semibold">Home</p>
          </Link>
        </li>

        <li>
          <Link href="/categories" className="flex flex-col items-center gap-1 text-gray-700">
            <TbCategory2 size={25} />
            <p className="text-xs font-semibold">Categories</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;
