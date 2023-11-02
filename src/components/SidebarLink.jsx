import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"

function SidebarLink(props) {
const location = useLocation();

  return (
    <Link 
        className={"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-1 transition-colors duration-200 text-gray-600 rounded-lg " + (props.href === location.pathname ? "bg-gray-100 text-gray-800" : "")} 
        to={props.href}
    >
        {props.icon}
        <span className="mx-2 font-normal">
            {props.name}
        </span>
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