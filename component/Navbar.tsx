"use client";

import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes: string[] = [
  "World",
  "Breaking",
  "Technology",
  "Business",
  "Sports",
  "Entertainment",
  "Science",
  "Health",
  "Politics",
  "Tourism",
  "Food",
  "Crime",
  "Education",
  "Environment",
  "LifeStyle",
  "Other",
];

export default function Navbar() {
  const { theme, changemode } = useTheme();
  const path = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-[75vw]  md:w-[50vw] lg:w-[25vw]  p-2 shadow flex-row justify-between gap-y-2"
          >
            <li>
              <Link
                className={path == "/" ? "text-blue-500 font-extrabold" : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            {routes.map((route, idx) => (
              <li key={idx} className="w-[48%]">
                <Link
                  className={
                    path == `/${route}` ? "text-blue-500 font-extrabold" : ""
                  }
                  href={`/${route}`}
                >
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-xl" href="/">
          NewsNow
        </Link>
      </div>
      <div className="navbar-end">
        <select
          onChange={(e) => changemode(e)}
          value={theme}
          className="select select-accent max-w-45 text-wrap"
        >
          <option disabled={true}>theme</option>
          <option value="Light mode">Light mode</option>
          <option value="Dark mode">Dark mode</option>
          <option value="System">System</option>
        </select>
      </div>
    </div>
  );
}
