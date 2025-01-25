import Link from "next/link";
import { LiaHomeSolid, LiaSquare } from "react-icons/lia";

function MainHeader() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-md">
      <ul className="flex items-center justify-around">
        <li>
          <Link href="/">
            <LiaHomeSolid size={35} />
          </Link>
        </li>

        <li>
          <Link href="/categories">
            <LiaSquare size={35} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeader;
