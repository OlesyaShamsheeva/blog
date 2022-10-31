import { NavLink } from "react-router-dom";
import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Menu.module.css";

export const Menu = ({ logOut, isHeader }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      value: "All articles",
      path: "/all-articles",
    },
    {
      id: 2,
      value: "My articles",
      path: "/my-articles/",
    },
    {
      id: 3,
      value: "Add article",
      path: "/add-article",
    },
    {
      id: 4,
      value: "Profile",
      path: "/profile",
    },
  ];
  return (
    <div>
      <div className={styles.wrap}>
        <nav
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={(ref) => (ref.isActive ? styles.active : "")}
           onClick={() => setNav(!nav)}
            >
              {link.value}
            </NavLink>
          ))}
          <button
          onClick={() => logOut()}
          className={isHeader ? styles.header_button : styles.footer_button}
        >
          Logout
        </button>
        </nav>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn} >
        {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={50} className={styles.aut}/>}
      </div>
    </div>
  );
};