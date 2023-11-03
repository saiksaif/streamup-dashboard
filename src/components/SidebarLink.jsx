import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

import styles from "./styles/SidebarLink.module.css";

function SidebarLink(props) {
const location = useLocation();

  return (
    <Link 
        className={"flex items-center rounded-lg " + (props.href === location.pathname ? (styles.gradienticonA + ' text-white') : (styles.gradienticon + " hover:text-black text-black"))} 
        to={props.href}
    >
        {props.icon}
        <span className={"mx-2 font-normal "}>
            {props.name}
        </span>

        {/* {props.href === location.pathname ? (
            <div className={styles.gradienticonA}>
                <SquareRoundedIcon />
            </div>
        ) : ""} */}
        
        <span className="flex-grow text-right">
            {/* <button type="button" className="w-6 h-6 text-xs  rounded-full text-white bg-red-500">
                <span className="p-1">
                    7
                </span>
            </button> */}
        </span>
    </Link>
  )
}

export default SidebarLink