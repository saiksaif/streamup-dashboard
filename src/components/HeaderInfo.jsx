import data from "../assets/data.json";

function HeaderInfo() {
  return (
    <div className="flex-row gap-4 flex justify-end items-center">
      <div className=" flex flex-col">
        <span className="text-md font-medium text-gray-600">{data?.header?.name || "Name"}</span>
        <span className="text-xs text-gray-400">{data?.header?.position || "Position"}</span>
      </div>
      <div className="flex-shrink-0">
        <a href="#" className="relative block">
          <img
            alt="profil"
            src={data?.header?.picture || "/user2.jpg"}
            className="mx-auto object-cover rounded-full h-10 w-10 "
          />
        </a>
      </div>
    </div>
  );
}

export default HeaderInfo;
