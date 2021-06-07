import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/boat.png' width={128} height={77} />
        <h1>navbar</h1>
      </div>
      <Link href='/'>home</Link>
      <Link href='/about'>about</Link>
    </nav>
  );
};

export default Navbar;
