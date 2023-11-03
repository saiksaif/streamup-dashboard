import React from "react";

function HeaderBar() {
  return (
    <div className="shadow-lg hover:shadow-2xl duration-300 rounded-2xl bg-white p-3">
      <div className="flex-row gap-4 flex justify-end items-center">
        <div className=" flex flex-col">
          <span className="text-md font-medium text-gray-600">
            Charlie
          </span>
          <span className="text-xs text-gray-400">CTO</span>
        </div>
        <div className="flex-shrink-0">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src="/user.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
