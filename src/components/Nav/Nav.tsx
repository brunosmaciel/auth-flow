import { CgProfile } from 'react-icons/cg';

import Image from 'next/image';
import Link from 'next/link';

type NavProps = {
  session?: {
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
};

export default function Nav({ session }: NavProps) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown" role={'dropdown'}>
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-sm" href={'/'}>
            Auth flow
          </Link>
        </div>
        <div className="navbar-end">
          <div className="avatar online">
            <div className=" rounded-full">
              {session ? (
                <Image
                  alt="userAvatar"
                  src={session?.user?.image}
                  width={30}
                  height={30}
                  role="profile-image"
                />
              ) : (
                <CgProfile width={80} role="profile-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
