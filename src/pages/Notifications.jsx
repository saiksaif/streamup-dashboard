import PopupModal from "../components/PopupModal";
import DataTable from "../components/DataTable";
import data from "../assets/data.json";

function Notifications() {
  const addNotifForm = () => {
    return (
      <div className="p-6">
        <form action="#">
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input type="text" id="title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" name="title" placeholder="Title" />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className=" relative ">
              <input type="text" id="description" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none" placeholder="Description" />
            </div>
          </div>
          <div className="flex w-full my-4">
            <button type="submit" className="py-2 px-4 bg-black text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
              Add Notification
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="w-100 px-1 md:px-5 pb-0">
        <PopupModal actionLabel='Add Notification' modalContent={addNotifForm()} />
      </div>

      <div className="w-100 px-1 md:px-5 pb-0">
        <DataTable headings={data.notifications.tableData.headings} rows={data.notifications.tableData.rows} showExtra={false} />
      </div>
    </div>
  )
}

export default Notifications