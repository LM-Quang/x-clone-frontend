import Link from "next/link";
import React from "react";

const menu = [
   { id: 1, name: "About", link: "/" },
   { id: 2, name: " Download the X app", link: "/" },
   { id: 3, name: "Grok", link: "/" },
   { id: 4, name: "Help Center", link: "/" },
   { id: 5, name: "Terms of Service", link: "/" },
   { id: 6, name: "Privacy Policy", link: "/" },
   { id: 7, name: "Cookie Policy", link: "/" },
   { id: 9, name: "Ads info", link: "/" },
   { id: 13, name: "Advertising", link: "/" },
   { id: 14, name: "Marketing", link: "/" },
   { id: 19, name: "© 2025 X Corp", link: "/" },
];

const Footer = () => {
   return (
      <footer className="flex flex-row items-center justify-around py-3 px-5">
         {menu.map((item) => {
            return (
               <Link
                  key={item.id}
                  href={item.link}
                  className="text-textGray text-[15px] my-1 hover:underline"
               >
                  {item.name}
               </Link>
            );
         })}
      </footer>
   );
};

export default Footer;
