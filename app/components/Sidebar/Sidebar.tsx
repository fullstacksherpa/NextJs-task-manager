"use client";

import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import styled from "styled-components";
import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();
  const pathname = usePathname();

  return (
    <nav
      className={`relative bg-[${theme.colorBg2}] w-${theme.sidebarWidth} border-2 border-solid border-[${theme.borderColor}] rounded-lg flex flex-col justify-between text-[${theme.colorGrey3}] `}>
      <div className={`m-6 p-4 relative rounded-lg cursor-pointer font-semibold text-[${theme.colorGrey0}] flex items-center`}>
        <div className={`absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md  transition-all duration-550 ease-linear rounded-lg opacity-20 bg-[${theme.colorBg3}] border-2 border-solid border-[${theme.borderColor2}] `}></div>
        <div className="pr-2 flex-shrink-0 inline-block overflow-hidden transition-all duration-500 ease-in-out rounded-full w-16 h-16">
          <Image width={70} height={70} src="/profile.jpg" alt="profile" className="rounded-full object-cover"/>
        </div>
        <h1 className="text-base flex flex-col">
          <span>Ongchen</span>
          <span>Sherpa</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`p-1.5 pr-4 pb-4 pl-8 m-1/12 grid  grid-cols-[30%_70%] 1fr relative cursor-pointer ${pathname === link ? "bg-red-500" : ""}`}>
              {item.icon}
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </nav>
  );
};

 

export default Sidebar;


