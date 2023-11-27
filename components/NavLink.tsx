import Link from "next/link"

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}
      className='block text-[--text-secondary] px-2 py-4 sm:text-xl rounded md:p-0 hover:text-[--text-primary]'>
      {title}
    </Link>
  );
};

export default NavLink;